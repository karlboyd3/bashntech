"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { geoAlbersUsa } from "d3-geo"
import { ArrowUpRight, MapPin } from "lucide-react"
import {
  US_ALBERS,
  US_MAP_HEIGHT,
  US_MAP_WIDTH,
  US_NATION_PATH,
  US_STATE_PATHS,
} from "@/lib/usMap"
import { publishedClients, type Client } from "@/data/clients"

/**
 * Pins closer than this (in map units) get fanned out so they stay clickable.
 * ~12 units is roughly 25 miles at this scale — tight enough that neighbouring
 * towns keep their own true position, loose enough to split a same-city stack.
 */
const CLUSTER_RADIUS = 12

type PlacedClient = {
  client: Client
  /** Where the pin is drawn (may be offset from the true location). */
  x: number
  y: number
  /** The client's actual projected position — the connector line anchors here. */
  anchorX: number
  anchorY: number
  offset: boolean
}

/**
 * Projects clients into map space, then fans out any that land on top of each
 * other. BashNTech's roster is concentrated in one metro, so without this the
 * pins overlap into a single unclickable blob.
 */
function placeClients(list: Client[]): PlacedClient[] {
  const projection = geoAlbersUsa()
    .scale(US_ALBERS.scale)
    .translate(US_ALBERS.translate)

  const projected = list
    .map((client) => {
      const point = projection([client.lng, client.lat])
      return point ? { client, x: point[0], y: point[1] } : null
    })
    .filter((p): p is { client: Client; x: number; y: number } => p !== null)

  // Greedy single-pass clustering: good enough for a roster of this size.
  const clusters: (typeof projected)[] = []
  for (const point of projected) {
    const hit = clusters.find((cluster) =>
      cluster.some(
        (member) => Math.hypot(member.x - point.x, member.y - point.y) < CLUSTER_RADIUS
      )
    )
    if (hit) hit.push(point)
    else clusters.push([point])
  }

  return clusters.flatMap((cluster): PlacedClient[] => {
    if (cluster.length === 1) {
      const only = cluster[0]
      return [{ ...only, anchorX: only.x, anchorY: only.y, offset: false }]
    }

    const cx = cluster.reduce((sum, p) => sum + p.x, 0) / cluster.length
    const cy = cluster.reduce((sum, p) => sum + p.y, 0) / cluster.length
    const radius = 16 + cluster.length * 3.5

    return cluster.map((point, i) => {
      // Start at 12 o'clock so a 2-pin cluster reads vertically, not sideways.
      const angle = (i / cluster.length) * Math.PI * 2 - Math.PI / 2
      return {
        client: point.client,
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        anchorX: cx,
        anchorY: cy,
        offset: true,
      }
    })
  })
}

export default function ClientMap() {
  const placed = useMemo(() => placeClients(publishedClients), [])
  const [active, setActive] = useState<number | null>(null)

  if (placed.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      {/* Map */}
      <div className="relative max-w-4xl mx-auto w-full">
        <svg
          viewBox={`0 0 ${US_MAP_WIDTH} ${US_MAP_HEIGHT}`}
          className="w-full h-auto"
          role="img"
          aria-label={`Map of the United States showing ${placed.length} BashNTech client ${
            placed.length === 1 ? "location" : "locations"
          }`}
        >
          <defs>
            <radialGradient id="pin-glow">
              <stop offset="0%" stopColor="#c8693a" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#c8693a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* States */}
          <g>
            {US_STATE_PATHS.map((state) => (
              <path
                key={state.id}
                d={state.d}
                className="fill-sand-dark/70 stroke-white"
                strokeWidth={0.75}
              />
            ))}
          </g>

          {/* National outline, drawn over the state fills for a crisp edge */}
          <path
            d={US_NATION_PATH}
            fill="none"
            className="stroke-ink-soft/30"
            strokeWidth={1.25}
            strokeLinejoin="round"
          />

          {/* Connector lines for fanned-out pins */}
          <g>
            {placed.map(
              (pin, i) =>
                pin.offset && (
                  <line
                    key={`link-${pin.client.name}`}
                    x1={pin.anchorX}
                    y1={pin.anchorY}
                    x2={pin.x}
                    y2={pin.y}
                    className={
                      active === i ? "stroke-brand" : "stroke-brand/40"
                    }
                    strokeWidth={0.75}
                  />
                )
            )}
          </g>

          {/* Pins */}
          <g>
            {placed.map((pin, i) => {
              const isActive = active === i
              return (
                <a
                  key={pin.client.name}
                  href={pin.client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${pin.client.name} — ${pin.client.location}. Opens their website in a new tab.`}
                  className="cursor-pointer outline-none focus-visible:[&>circle:last-of-type]:stroke-warm"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  {/* Glow */}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r={isActive ? 30 : 22}
                    fill="url(#pin-glow)"
                    className="transition-all duration-300"
                  />
                  {/* Generous invisible hit area — the visible dot is small */}
                  <circle cx={pin.x} cy={pin.y} r={18} fill="transparent" />
                  {/* Dot */}
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r={isActive ? 11 : 9}
                    className={`transition-all duration-300 ${
                      isActive ? "fill-warm" : "fill-brand"
                    }`}
                    stroke="#ffffff"
                    strokeWidth={3}
                  />
                </a>
              )
            })}
          </g>
        </svg>

        {/* Labels — HTML overlay so they get real type rendering, not SVG text.
            Positioned as a % of the viewBox so they track the scaled SVG.
            Always visible: with a short roster a label beats a hover-only
            tooltip, and touch devices have no hover at all. Hidden on phones,
            where the list below does the job. */}
        {placed.map((pin, i) => {
          const leftPct = (pin.x / US_MAP_WIDTH) * 100
          // Flip labels near either coast so they never run off the map.
          const side = leftPct < 50 ? "right" : "left"
          return (
            <div
              key={`label-${pin.client.name}`}
              className={`hidden sm:block absolute z-10 pointer-events-none -translate-y-1/2 ${
                side === "right" ? "ml-5" : "-translate-x-full -ml-5"
              }`}
              style={{ left: `${leftPct}%`, top: `${(pin.y / US_MAP_HEIGHT) * 100}%` }}
            >
              <div
                className={`bg-white border rounded-xl px-3.5 py-2 shadow-[0_8px_24px_rgba(28,25,23,0.12)] whitespace-nowrap transition-colors duration-200 ${
                  active === i ? "border-brand" : "border-sand-dark"
                }`}
              >
                <p className="text-ink font-semibold text-sm leading-tight">{pin.client.name}</p>
                <p className="text-ink-soft text-xs mt-0.5">{pin.client.location}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Client list — the real interface on touch devices, where there is no
          hover, and a plain-HTML fallback for the SVG links. */}
      <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto w-full">
        {placed.map((pin, i) => (
          <motion.a
            key={pin.client.name}
            href={pin.client.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.3) }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className="group flex items-center gap-3 bg-white hover:bg-cream border border-sand-dark hover:border-brand/40 rounded-2xl px-4 py-3.5 transition-colors duration-200"
          >
            <span className="w-9 h-9 rounded-xl bg-brand-tint flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-brand" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-ink text-sm font-semibold truncate">
                {pin.client.name}
              </span>
              <span className="block text-ink-soft text-xs truncate">
                {pin.client.industry} · {pin.client.location}
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-ink-soft group-hover:text-brand transition-colors duration-200 flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
