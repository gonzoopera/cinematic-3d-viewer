import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';

const CinematicModel = () => {
  const meshRef = useRef();

  // چرخش نرم و سینماتیک مدل
  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 64]} />
      <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.8} />
    </mesh>
  );
};

export default function CinematicViewer() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* نورپردازی سینماتیک با کنتراست بالا */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" castShadow />
        <spotLight position={[-5, 5, -2]} intensity={1.5} color="#0055ff" />
        
        <CinematicModel />
        
        {/* تنظیمات محیط استودیویی و سایه‌ها */}
        <Environment preset="studio" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.8} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
