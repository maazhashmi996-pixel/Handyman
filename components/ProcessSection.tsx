"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Microscope, Wrench, CheckCircle2, AlertCircle } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial 15-minute discovery call to discuss your project requirements and vision.",
        icon: <MessageSquare size={32} className="text-cyan-400" />,
        status: "Complimentary"
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149*",
        desc: "Detailed on-site diagnostics. This fee is 100% credited back if you proceed with us.",
        icon: <Microscope size={32} className="text-purple-500" />,
        status: "Applied to Quote"
    },
    {
        id: "03",
        title: "Execution",
        price: "Quote-based",
        desc: "Precision engineering and maintenance using top-tier materials and tech.",
        icon: <Wrench size={32} className="text-blue-500" />,
        status: "Quality Guaranteed"
    }
];

export default function ProcessSection() {
    return (
        <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-cyan-500 tracking-[0.3em] font-bold text-sm uppercase"
                    >
                        How it works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mt-4 uppercase italic italic"
                    >
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Evolution.</span>
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group z-10"
                        >
                            <div className="bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] h-full">
                                {/* Badge & Price */}
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-6xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors">
                                        {step.id}
                                    </span>
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                                        <span className="text-cyan-400 font-bold tracking-tighter text-xl">{step.price}</span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="mb-6 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl w-fit border border-white/5">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6 font-light">
                                    {step.desc}
                                </p>

                                {/* Status Tag */}
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <CheckCircle2 size={14} className="text-cyan-500" />
                                    {step.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex items-center justify-center gap-3 text-gray-500 bg-white/5 w-fit mx-auto px-6 py-3 rounded-full border border-white/5"
                >
                    <AlertCircle size={18} className="text-amber-500" />
                    <p className="text-sm">Technical inspection fee is non-refundable but applied to your final project balance.</p>
                </motion.div>
            </div>
        </section>
    );
}