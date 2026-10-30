import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

function Particles() {
  const { isAntiGravity } = useTheme();
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      if (isAntiGravity) {
        // Floating upwards faster in anti-gravity mode
        pointsRef.current.position.y += delta * 2;
        pointsRef.current.rotation.y += delta * 0.1;
      } else {
        // Subtle drift normally
        pointsRef.current.rotation.y += delta * 0.05;
        pointsRef.current.rotation.x += delta * 0.02;
      }
      
      // Reset position if it goes too high
      if (pointsRef.current.position.y > 25) {
        pointsRef.current.position.y = -25;
      }
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <pointsMaterial size={0.05} color="#06B6D4" transparent opacity={0.6} sizeAttenuation />
    </Points>
  );
}

// Helper to pass positions to geometry
function Points({ positions, children, ref }: { positions: Float32Array, children: React.ReactNode, ref: any }) {
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {children}
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Particles />
        </Float>
      </Canvas>
    </div>
  );
}
