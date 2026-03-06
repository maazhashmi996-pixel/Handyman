"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, DollarSign } from 'lucide-react';

// 3D Element: A floating, distorting "Maintenance Core"
const FuturisticShape = () => {
    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#3b82f6" // Electric Blue
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center">
            {/* Background Subtle Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Content: The "Clean & Sleek" Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Next-Gen Property Care
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter mb-6 italic uppercase">
                        Precision <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Redefined.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 font-light">
                        Luxury maintenance for residential estates and commercial hubs.
                        Futuristic solutions for pools, landscaping, and office upkeep.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                            FREE CONSULTATION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-gray-700 font-bold rounded-sm hover:bg-gray-800 transition-all">
                            OUR SERVICES
                        </button>
                    </div>

                    {/* USP Minimalist Bar */}
                    <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">
                        <div className="flex flex-col gap-1">
                            <Zap size={20} className="text-blue-500" />
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Quality</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <DollarSign size={20} className="text-blue-500" />
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Affordable</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <ShieldCheck size={20} className="text-blue-500" />
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Assured</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content: The 3D "Wow" Factor */}
                <div className="h-[500px] lg:h-[700px] cursor-grab active:cursor-grabbing">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                        <Suspense fallback={null}>
                            <FuturisticShape />
                            <OrbitControls enableZoom={false} />
                        </Suspense>
                    </Canvas>
                </div>

            </div>
        </section>
    );
}