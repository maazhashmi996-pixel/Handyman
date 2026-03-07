"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Microscope, Wrench, ArrowRight, Zap } from "lucide-react";

interface Step {
    id: string;
    title: string;
    price: string;
    desc: string;
    detail: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial discovery call to map your requirements.",
        detail: "Strategic analysis of your architectural goals, technical feasibility and system planning.",
        icon: <MessageSquare size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-blue-600 via-cyan-500 to-blue-400",
        glow: "rgba(37,99,235,0.5)",
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149",
        desc: "On-site diagnostics with laser precision.",
        detail: "Structural analysis, site scanning and feasibility modeling for high-end execution.",
        icon: <Microscope size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-orange-600 via-amber-500 to-orange-400",
        glow: "rgba(249,115,22,0.5)",
    },
    {
        id: "03",
        title: "Project Execution",
        price: "FIXED",
        desc: "Precision engineering implementation.",
        detail: "Full-scale development with high-grade materials and real-time progress monitoring.",
        icon: <Wrench size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-purple-600 via-indigo-500 to-purple-400",
        glow: "rgba(147,51,234,0.5)",
    },
];

export default function UltraWorkflow() {
    return (
        <section className="relative py-24 md:py-36 px-6 bg-slate-950 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full -top-48 -left-48" />
            <div className="absolute w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -bottom-48 -right-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 md:mb-28"
                >
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6 shadow-xl">
                        <Zap size={14} className="text-orange-500 fill-orange-500" />
                        <span className="text-orange-500 tracking-[0.4em] uppercase text-[10px] font-black">Workflow Protocol</span>
                    </div>

                    <h2 className="text-5xl md:text-[85px] font-black text-white mt-6 tracking-tighter leading-none">
                        Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-white drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                            Process.
                        </span>
                    </h2>
                </motion.div>

                {/* CARDS GRID */}
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -15 }}
                            className="group relative h-[480px] rounded-[40px] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500"
                        >
                            <CardContent step={step} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CardContent({ step }: { step: Step }) {
    return (
        <>
            {/* Dynamic Hover Background Glow */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${step.color} blur-3xl`}
            />

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                    {/* Glowing Number */}
                    <span className="text-7xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500">
                        {step.id}
                    </span>
                    <div className={`bg-gradient-to-r ${step.color} text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-lg`}>
                        {step.price}
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Icon Box with Intense Glow */}
                    <div
                        style={{ boxShadow: `0 0 30px ${step.glow}` }}
                        className={`w-20 h-20 rounded-[28px] flex items-center justify-center bg-gradient-to-br ${step.color} border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                    >
                        {step.icon}
                    </div>

                    <div>
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm font-bold mb-3 uppercase tracking-tighter">
                            {step.desc}
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                            {step.detail}
                        </p>
                    </div>
                </div>

                {/* Ultra Button */}
                <button className={`group/btn flex items-center justify-between bg-white text-slate-950 py-4 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gradient-to-r ${step.color} hover:text-white transition-all duration-300 shadow-xl`}>
                    Start Step
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" strokeWidth={3} />
                </button>
            </div>

            {/* Glowing Border on Hover */}
            <div className={`absolute inset-0 rounded-[40px] border-2 border-transparent group-hover:border-white/20 transition-all duration-500`} />
        </>
    );
}