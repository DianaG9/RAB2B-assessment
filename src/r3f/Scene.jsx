import React, { Suspense } from 'react'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Model from './Model'

export default function Scene({ open, onClick }) {
    return (
        <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), onClick())}>
                <Model open={open} />
            </group>
      <Environment preset="city" />
      <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Suspense>
  )
}