import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
import "./styles.css"
export default function Cinema() {
  return (
    <Canvas  gl={{ alpha: false }} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Samurai rotation={[0, Math.PI - 0.70, 0]} position={[-1, 0, 2]} scale={[1, 1, 1]} />
          <VideoText position={[0, 1.3, -2]} />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[12, 10, 0]} intensity={0.3} />
        <directionalLight position={[50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Canvas>
  )
}

function Samurai(props:any) {
  const colotTexture = useTexture('Robe2_normal.jpeg')
  const { scene } = useGLTF('/Samurai.gltf')
  return <primitive object={scene} map={colotTexture} {...props} />
  
}

function VideoText(props: any) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/intro.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} {...props}>
      Karasu
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

/*function Ground() {
  const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}*/

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
