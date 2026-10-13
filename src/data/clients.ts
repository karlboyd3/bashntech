/**
 * Client roster powering the map in src/components/Portfolio.tsx.
 *
 * Only entries with `published: true` are rendered — a client needs a
 * confirmed location (for the pin) and a live public URL (for the link) before
 * it belongs on the map.
 *
 * Coordinates are plain decimal lat/lng; the map projects them with the same
 * Albers USA constants us-atlas baked into the state paths. For a client that
 * serves a region rather than one town, the pin sits at the region's center.
 */
export type Client = {
  /** Business name, as it should appear to visitors. */
  name: string
  /** Industry label shown under the name. */
  industry: string
  /** Where they are, as shown to visitors ("Pleasant Hill, CA"). */
  location: string
  lat: number
  lng: number
  /** Live public site. Must be a real production URL, not a preview link. */
  url: string
  /** Homepage screenshot in /public (shown with the client's permission). */
  image?: string
  published: boolean
}

export const clients: Client[] = [
  {
    name: "Chico's Chili",
    industry: "Restaurant",
    location: "Northern Virginia",
    lat: 38.8462,
    lng: -77.3064,
    url: "https://chicoschili.com",
    image: "/work/chicos-chili.jpg",
    published: true,
  },
  {
    name: "Dr. Eric Montalvo, DDS",
    industry: "Dental Practice",
    location: "Pleasant Hill, CA",
    lat: 37.948,
    lng: -122.0608,
    url: "https://drericmontalvo.com",
    image: "/work/dr-eric-montalvo.jpg",
    published: true,
  },
]

/** Clients cleared to appear on the public map. */
export const publishedClients = clients.filter(
  (c) => c.published && c.url !== "" && (c.lat !== 0 || c.lng !== 0)
)
