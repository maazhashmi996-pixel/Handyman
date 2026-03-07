"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, Warehouse, TreePine, ShieldCheck, Zap } from "lucide-react";

const services = [
    {
        title: "Residential Estates",
        code: "STR-A1",
        icon: <Building2 size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
        color: "from-blue-600 via-cyan-500 to-emerald-400",
        shadow: "shadow-blue-500/40"
    },
    {
        title: "Aquatic Systems",
        code: "H2O-P5",
        icon: <Droplets size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2022",
        color: "from-indigo-600 via-blue-500 to-sky-400",
        shadow: "shadow-indigo-500/40"
    },
    {
        title: "Commercial Hubs",
        code: "CORP-X",
        icon: <ShieldCheck size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        color: "from-slate-600 via-slate-800 to-black",
        shadow: "shadow-slate-500/40"
    },
    {
        title: "Garage Automation",
        code: "LOG-M9",
        icon: <Warehouse size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070",
        color: "from-orange-600 via-amber-500 to-yellow-400",
        shadow: "shadow-orange-500/40"
    },
    {
        title: "Landscape Design",
        code: "ENV-G2",
        icon: <TreePine size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?q=80&w=2022",
        color: "from-emerald-600 via-green-500 to-lime-400",
        shadow: "shadow-emerald-500/40"
    },
];

export default function ServiceGrid() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative py-24 md:py-36 px-6 bg-slate-950 overflow-hidden min-h-screen">

            {/* Ultra Vibrant Ambient Background */}
            <div className="absolute w-[600px] h-[600px] bg-blue-600/30 blur-[150px] rounded-full -top-48 -left-48 animate-pulse"></div>
            <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                        <Zap size={14} className="text-blue-400 fill-blue-400" />
                        <span className="text-blue-400 uppercase tracking-[0.3em] text-[10px] font-black">
                            Our Expertise
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-[80px] font-black text-white mt-4 tracking-tighter leading-none">
                        Advanced{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                            Engineering
                        </span>
                    </h2>

                    <p className="text-slate-400 mt-8 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Precision engineered systems combining <span className="text-white">modern architecture</span>,
                        automation and <span className="text-blue-400">intelligent infrastructure</span>.
                    </p>
                </motion.div>

                {/* services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

                    {services.map((item, index) => {
                        const xInitial = isMobile ? 0 : (index % 2 === 0 ? -100 : 100);
                        const yInitial = isMobile ? 50 : 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: xInitial, y: yInitial, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 80
                                }}
                                whileHover={{ y: -12 }}
                                className="group relative rounded-[40px] overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl min-h-[400px]"
                            >
                                {/* vibrant image overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-40 grayscale-[30%] contrast-[120%] group-hover:scale-110 group-hover:grayscale-0 transition duration-1000"
                                    />
                                    {/* dynamic color wash on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                </div>

                                {/* content overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>

                                {/* content */}
                                <div className="relative z-20 p-10 flex flex-col justify-end h-full min-h-[400px]">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-8 bg-gradient-to-br ${item.color} shadow-2xl ${item.shadow} group-hover:scale-110 transition-transform duration-500 border border-white/20`}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-px w-8 bg-gradient-to-r ${item.color}`}></div>
                                            <span className="text-[10px] text-white/50 font-black tracking-[0.3em] uppercase">
                                                {item.code}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                                            Advanced structural design with automation and
                                            high-performance systems for modern environments.
                                        </p>
                                    </div>
                                </div>

                                {/* Interactive Glow Border */}
                                <div className={`absolute inset-0 rounded-[40px] border-2 border-transparent group-hover:border-white/20 transition-all duration-500 z-30`}></div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-24">
                    <span className="px-8 py-3 rounded-full border border-white/5 bg-white/5 text-slate-500 text-[10px] font-bold tracking-[0.5em] uppercase backdrop-blur-sm">
                        System Architecture Mapping
                    </span>
                </div>
            </div>
        </section>
    );
}