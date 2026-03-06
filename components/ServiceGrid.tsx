"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Droplets, TreePine, Warehouse, Briefcase, Sparkles, Trash2 } from 'lucide-react';

const services = [
    {
        title: "Residential Estates",
        desc: "Smart upkeep for modern homes.",
        icon: <Home size={24} />,
        size: "col-span-2 row-span-2",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    },
    {
        title: "Pool Systems",
        desc: "Crystal clear, tech-managed pools.",
        icon: <Droplets size={24} />,
        size: "col-span-1 row-span-1",
        img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80",
    },
    {
        title: "Commercial Hubs",
        desc: "Office & Building maintenance at scale.",
        icon: <Building2 size={24} />,
        size: "col-span-1 row-span-2",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    },
    {
        title: "Garage Tech",
        desc: "Precision repair & automation.",
        icon: <Warehouse size={24} />,
        size: "col-span-1 row-span-1",
        img: "https://images.unsplash.com/photo-1595844730298-b9f0ff98ffd0?auto=format&fit=crop&q=80",
    },
    {
        title: "Landscaping",
        desc: "Architectural garden design.",
        icon: <TreePine size={24} />,
        size: "col-span-2 row-span-1",
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?auto=format&fit=crop&q=80",
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-[#0a0a0a] py-24 px-6">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase italic">
                            Full Spectrum <br /> <span className="text-blue-500">Maintenance.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-right font-light">
                        From private villas to corporate towers, we deliver a standard of care that exceeds expectations.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${service.size} relative group overflow-hidden rounded-xl border border-white/5 bg-[#111]`}
                        >
                            {/* Image Background with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-30"
                                style={{ backgroundImage: `url(${service.img})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_10px_#3b82f6]" />
                        </motion.div>
                    ))}
                </div>

                {/* Commercial-Specific Micro-Services */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Carpet Cleaning', 'Garbage Upkeep', 'Office Care', 'Building Safety'].map((item) => (
                        <div key={item} className="p-6 border border-white/5 bg-[#0d0d0d] rounded-lg hover:border-blue-500/30 transition-colors flex items-center gap-3">
                            <Sparkles size={16} className="text-blue-500" />
                            <span className="text-gray-300 font-medium text-sm tracking-wide">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}