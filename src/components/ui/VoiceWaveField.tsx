"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export default function VoiceWaveField(props: any) {
  const ref = useRef<any>(null);
  const count = 100;
  
  // Create a flat grid of points on the XZ plane
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        // Center the grid around 0,0
        const x = (i - count / 2) * 0.15;
        const z = (j - count / 2) * 0.15;
        const y = 0; 
        const index = (i * count + j) * 3;
        pos[index] = x;
        pos[index + 1] = y;
        pos[index + 2] = z;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        const x = positions[index];
        const z = positions[index + 2];
        
        // Calculate distance from center to create outward radiating waves
        const distance = Math.sqrt(x * x + z * z);
        
        // Complex wave function simulating voice frequencies/ripples
        const y = Math.sin(distance * 2 - time * 3) * 0.4 + Math.cos(x * 1.5 + time) * 0.2;
        
        positions[index + 1] = y;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire field
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]} position={[0, -2, -3]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}
