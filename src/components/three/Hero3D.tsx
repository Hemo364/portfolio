import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

function RotatingShape() {
  const groupRef = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.y += delta * 0.18
    group.rotation.x += delta * 0.06
    group.rotation.y += (pointer.x * 0.3 - group.rotation.y * 0.02) * delta
    group.rotation.x += (-pointer.y * 0.2 - group.rotation.x * 0.02) * delta
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={1} />
      <RotatingShape />
      <Sparkles count={70} scale={4.5} size={2.5} speed={0.25} color="#3b82f6" opacity={0.6} />
    </Canvas>
  )
}
