import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
import "./styles.css"
// Remove the following import lines
// import { Text, useThree } from 'react-three-fiber';
// import { videoTexture, sRGBEncoding, meshBasicMaterial } from 'three';
export default function Cinema() {
  return (
    <Canvas  gl={{ alpha: false }} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['#292929', 15, 25]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Corvo rotation={[0, Math.PI -3, 0]} position={[-0.1, 0, 1]} scale={[0.1, 0.080, 0.1]} />
          <VideoText position={[0, 1.3, -2]} />
          <Ground/>
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[12, 10, 0]} intensity={0.3} />
        <directionalLight position={[60, 100, -40]} intensity={0.4} />
        <Intro />
      </Suspense>
    </Canvas>)}

function Corvo(props:any) {
  const colotTexture = useTexture('/MAT_Crow_baseColor.png')
  const { scene } = useGLTF('/corvo.gltf')
  return <primitive object={scene} map={colotTexture} {...props} />}

function VideoText(props: any) {
  const { size } = useThree(); 
  const responsiveFontSize = size.width > 780 ? 2.5 : 0.99; 
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/intro.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }));

  useEffect(() => {
    void video.play();
  }, [video]);
  return (
    <Text font="/Inter-Bold.woff" fontSize={responsiveFontSize} letterSpacing={-0.06} {...props}>
      Karasu
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>);}
    
function Ground() {
  const [floor, normal] = useTexture(['/LowSet1_baseColor.png', '/LowSet1_baseColor.png']);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        
      {(Material: React.ElementType, props: any) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props} 
        />
      )}
    </Reflector>
  );
}
function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
