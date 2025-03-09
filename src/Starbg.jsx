import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import starImg from "./assets/star.png";

const Stars = () => {
    const starGeo = useRef(null);
    const positions = new Float32Array(6000 * 3);
    const velocities = new Float32Array(6000);

    // Load texture
    const texture = useLoader(THREE.TextureLoader, starImg);

    // Initialize star positions
    useEffect(() => {
        for (let i = 0; i < 6000; i++) {
            let x = (Math.random() - 0.5) * 2000;
            let y = (Math.random() - 0.5) * 2000;
            let z = (Math.random() - 0.5) * 2000; // Z-axis for depth

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            velocities[i] = Math.random() * 0.05 + 0.02; // Varying speed
        }

        starGeo.current.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
    }, []);

    useFrame(() => {
        const posArray = starGeo.current.attributes.position.array;

        for (let i = 0; i < 6000; i++) {
            // Warp speed effect
            let speed = velocities[i] * (1 + Math.pow(Math.abs(posArray[i * 3 + 2]) / 1000, 2));

            posArray[i * 3 + 2] += speed * 15; // Move stars towards camera

            // Reset stars behind camera
            if (posArray[i * 3 + 2] > 1000) {
                posArray[i * 3 + 2] = -1000;
                posArray[i * 3] = (Math.random() - 0.5) * 2000;
                posArray[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            }
        }

        starGeo.current.attributes.position.needsUpdate = true;
    });

    return (
        <points>
            <bufferGeometry ref={starGeo} />
            <pointsMaterial
                color={0xffffff}
                size={2} // Smaller size for warp effect
                map={texture}
                transparent
                depthTest={false}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const Starbg = () => {
    return (
        <Canvas camera={{ position: [0, 0, 500], fov: 75 }}> 
            <Stars />
        </Canvas>
    );
};

export default Starbg;
