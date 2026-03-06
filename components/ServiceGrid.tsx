"use client";
import React from 'react';
import { motion } from 'framer-motion';
// Neon Blue icons replace standard ones
import { Home, Building2, Droplets, TreePine, Warehouse, Briefcase, Sparkles, Trash2, Zap } from 'lucide-react';

const services = [
    {
        title: "Residential Estates",
        desc: "Smart upkeep for high-tech modern homes.",
        icon: <Home size={24} className="text-cyan-400" />, // Neon Cyan
        size: "col-span-2 row-span-2",
        // AI Image Prompt: A ultra-modern hyper-realistic luxury smart home at dusk, sleek lines, glass walls, soft warm internal lighting, ambient blue architectural edge lighting, 8k.
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    },
    {
        title: "Pool Systems",
        desc: "Crystal clear, automated filtration.",
        icon: <Droplets size={24} className="text-blue-400" />, // Neon Blue
        size: "col-span-1 row-span-1",
        // AI Image Prompt: Cinematic shot inside a luxury futuristic indoor infinity pool, neon blue lighting under the water, minimalist architecture, hyper-realistic water texture, geometric design.
        img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
    },
    {
        title: "Commercial Hubs",
        desc: "Office & Building maintenance at scale.",
        icon: <Building2 size={24} className="text-purple-400" />, // Neon Purple
        size: "col-span-1 row-span-2",
        // AI Image Prompt: Futuristic corporate skyscraper plaza, glass and steel architecture, moving neon light streaks reflecting on surfaces, sharp focus, 8k resolution, cinematic lighting.
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    },
    {
        title: "Garage Tech",
        desc: "Precision repair & smart automation.",
        icon: <Warehouse size={24} className="text-amber-400" />, // Neon Amber/Gold
        size: "col-span-1 row-span-1",
        // AI Image Prompt: Inside a futuristic clean garage, a sleek luxury electric vehicle, a high-tech automated garage door mechanism with glowing status lights, organized robotic tools.
        img: "https://images.unsplash.com/photo-1595844730298-b9f0ff98ffd0?auto=format&fit=crop&q=80",
    },
    {
        title: "Landscaping",
        desc: "Architectural garden & biome design.",
        icon: <TreePine size={24} className="text-emerald-400" />, // Neon Green
        size: "col-span-2 row-span-1",
        // AI Image Prompt: A futuristic garden on a rooftop of a cyberpunk city, bioluminescent plants, sharp geometric pathways with embedded green LED lighting, stunning view, hyper-detailed.
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?auto=format&fit=crop&q=80",
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-[#050505] py-32 px-6"> {/* Darker background for contrast */}
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter uppercase italic leading-none"
                        >
                            Future-Proof <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                Property Care.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-400 max-w-sm text-right font-light text-lg"
                    >
                        From automated residential estates to high-rise commercial hubs, we deploy next-generation maintenance solutions in the US.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"> {/* Increased gap and height */}
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            viewport={{ once: true }}
                            // Added bright border on hover and stronger shadow
                            className={`${service.size} relative group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]`}
                        >
                            {/* AI Image Background with Brightened Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-80" // Increased opacity
                                style={{ backgroundImage: `url(${service.img})` }}
                            />
                            {/* Lighter Gradient Overlay for cleaner look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-current transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">{service.title}</h3>
                                </div>
                                <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Futuristic "Glow" Accent */}
                            <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Commercial-Specific Micro-Services with Neon Borders */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'Carpet Cleaning', icon: <Sparkles className="text-purple-400" /> },
                        { name: 'Garbage Upkeep', icon: <Trash2 className="text-emerald-400" /> },
                        { name: 'Office Care', icon: <Briefcase className="text-amber-400" /> },
                        { name: 'Building Safety', icon: <Zap className="text-red-400" /> }
                    ].map((item) => (
                        <motion.div
                            key={item.name}
                            whileHover={{ y: -5, boxShadow: '0_0_20px_rgba(255,255,255,0.1)' }}
                            className="p-8 border border-white/5 bg-[#0a0a0a] rounded-xl hover:border-white/20 transition-all flex items-center gap-4 cursor-pointer"
                        >
                            {item.icon}
                            <span className="text-white font-semibold text-lg tracking-wide">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}