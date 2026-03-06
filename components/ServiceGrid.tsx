"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, Warehouse, TreePine, ShieldCheck } from "lucide-react";

const services = [
    {
        title: "Residential Estates",
        code: "STR-A1",
        icon: <Building2 size={28} />,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Aquatic Systems",
        code: "H2O-P5",
        icon: <Droplets size={28} />,
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2022",
        color: "from-sky-500 to-blue-700",
    },
    {
        title: "Commercial Hubs",
        code: "CORP-X",
        icon: <ShieldCheck size={28} />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        color: "from-slate-700 to-slate-900",
    },
    {
        title: "Garage Automation",
        code: "LOG-M9",
        icon: <Warehouse size={28} />,
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070",
        color: "from-orange-500 to-amber-500",
    },
    {
        title: "Landscape Design",
        code: "ENV-G2",
        icon: <TreePine size={28} />,
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?q=80&w=2022",
        color: "from-emerald-500 to-green-400",
    },
];

export default function ServiceGrid() {
    return (
        <section className="relative py-24 md:py-36 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden min-h-screen">

            {/* background glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-0 left-0"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 md:mb-24"
                >
                    <span className="text-blue-400 uppercase tracking-[0.4em] text-xs font-bold">
                        Our Expertise
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mt-6 tracking-tight">
                        Advanced{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Engineering
                        </span>
                    </h2>

                    <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm md:text-base">
                        Precision engineered systems combining modern architecture,
                        automation and intelligent infrastructure.
                    </p>
                </motion.div>

                {/* services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

                    {services.map((item, index) => {
                        // Mobile friendly animation values
                        const xValue = typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : (index % 2 === 0 ? -200 : 200);

                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: xValue,
                                    scale: 0.9
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.05
                                }}
                                className="group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] min-h-[320px]"
                            >
                                {/* image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                                {/* content */}
                                <div className="relative p-6 md:p-10 flex flex-col justify-end h-[320px] md:h-[350px]">
                                    <div
                                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color} shadow-xl group-hover:scale-110 transition`}
                                    >
                                        {item.icon}
                                    </div>

                                    <span className="text-xs text-white/40 font-mono tracking-widest">
                                        {item.code}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-black text-white mt-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/60 text-sm mt-3">
                                        Advanced structural design with automation and
                                        high-performance systems for modern environments.
                                    </p>
                                </div>

                                {/* border glow */}
                                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-blue-400/50 transition"></div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-20 md:mt-24 text-slate-500 text-xs tracking-[0.4em] uppercase">
                    System Architecture Mapping
                </div>
            </div>
        </section>
    );
}