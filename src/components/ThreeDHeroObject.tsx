"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars } from "@react-three/drei"
import * as THREE from "three"

function OrbitingSphere({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const angle = (index / 8) * Math.PI * 2
  const radius = 2.3

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * 0.45
    meshRef.current.position.x = Math.cos(t + angle) * radius
    meshRef.current.position.z = Math.sin(t + angle) * radius
    meshRef.current.position.y = Math.sin(t * 1.5 + angle) * 0.4
  })

  const colors = ["#38bdf8", "#0ea5e9", "#7dd3fc", "#0369a1"]
  const color = colors[index % colors.length]

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} />
    </mesh>
  )
}

function TechGear() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const diagRingRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18
      groupRef.current.rotation.x += delta * 0.06
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += delta * 0.5
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.3
      outerRingRef.current.rotation.x += delta * 0.08
    }
    if (diagRingRef.current) {
      diagRingRef.current.rotation.y += delta * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core — solid icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color="#060e22"
          emissive="#0a3a6a"
          emissiveIntensity={0.7}
          metalness={1.0}
          roughness={0.08}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <icosahedronGeometry args={[1.08, 2]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Inner orbit ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.032, 16, 120]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={1.6}
          metalness={0.9}
          roughness={0}
        />
      </mesh>

      {/* Outer orbit ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.5, 0.4, 0]}>
        <torusGeometry args={[1.95, 0.022, 16, 120]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.3}
          metalness={0.9}
          roughness={0}
        />
      </mesh>

      {/* Diagonal accent ring */}
      <mesh ref={diagRingRef} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.75, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#7dd3fc"
          emissiveIntensity={1.0}
          metalness={0.9}
          roughness={0}
        />
      </mesh>

      {/* Orbiting particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <OrbitingSphere key={i} index={i} />
      ))}
    </group>
  )
}

export default function ThreeDHeroObject() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.12} color="#0d2040" />
        <pointLight position={[6, 6, 4]} intensity={4} color="#0ea5e9" />
        <pointLight position={[-5, -4, -4]} intensity={2} color="#38bdf8" />
        <pointLight position={[0, 6, -5]} intensity={1.5} color="#0369a1" />
        <pointLight position={[0, -6, 5]} intensity={0.8} color="#7dd3fc" />

        <Stars
          radius={25}
          depth={60}
          count={350}
          factor={2.5}
          saturation={0.6}
          fade
          speed={0.4}
        />

        <Suspense fallback={null}>
          <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
            <TechGear />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}
