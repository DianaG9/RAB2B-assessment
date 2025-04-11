import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import { DarkMode } from '../features/DarkMode'
import '..//styles/_Canvas.css'

export default function CanvasContainer() {
  const [open, setOpen] = useState(false)
  const [theme] = DarkMode()

  const backgroundColor = open
    ? "var(--main-opened-laptop-color)"
    : "var(--main-closed-laptop-color)"

  return (
    <main className="canvas_section" style={{ background: backgroundColor, position: 'relative' }}>
      

      <h1
        className="canvas_section__title"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: `translate(-50%, ${open ? '-50px' : '0'})`,
          opacity: open ? 0 : 1,
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          zIndex: 10,
        }}
      >
        Check the best of <br /> Diana
      </h1>

      <a
        href="/about"
        rel="noopener noreferrer"
        className="canvas_section__link"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: `translate(-50%, ${open ? '0' : '50px'})`,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          zIndex: 10,
          color: theme === 'dark' ? '#fff' : '#000',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Check out my portfolio →
      </a>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={backgroundColor}
        />
        <Scene open={open} onClick={() => setOpen(!open)} />
      </Canvas>
    </main>
  )
}