import { Stars, Float } from "@react-three/drei"; 
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#0f172a", "#312e81", "#4c1d95", "#000000"];

const ShootingStar = () => {
  const meshRef = useRef();
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (active && meshRef.current) {
      meshRef.current.position.x -= 35 * delta;
      meshRef.current.position.y -= 10 * delta;
      
      if (meshRef.current.position.x < -50) {
        setActive(false);
      }
    }
  });

  useEffect(() => {
    const triggerStar = () => {
      if (!meshRef.current) return;
      meshRef.current.position.set(20 + Math.random() * 20, 10 + Math.random() * 15, 0);
      setActive(true);
      
      setTimeout(triggerStar, Math.random() * 5000 + 3000);
    };
    triggerStar();
  }, []);

  if (!active) return null;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
      <boxGeometry args={[3, 0.03, 0.03]} /> 
      <meshBasicMaterial color="#a5f3fc" transparent opacity={0.9} />
    </mesh>
  );
};

const StarField = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            const { x, y } = state.mouse;
            
            groupRef.current.rotation.y = x * 0.1; 
            groupRef.current.rotation.x = -y * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Stars 
                    radius={100} 
                    depth={50} 
                    count={6000} 
                    factor={4} 
                    saturation={0} 
                    fade 
                    speed={1} 
                />
            </Float>
        </group>
    );
};

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <StarField />
          <ShootingStar />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;