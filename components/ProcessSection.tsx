"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Microscope, Wrench, ArrowRight, LucideIcon } from "lucide-react";

interface Step {
    id: string;
    title: string;
    price: string;
    desc: string;
    detail: string;
    icon: React.ReactNode;
    color: string;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial discovery call to map your requirements.",
        detail: "Strategic analysis of your architectural goals, technical feasibility and system planning.",
        icon: <MessageSquare size={30} />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149",
        desc: "On-site diagnostics with laser precision.",
        detail: "Structural analysis, site scanning and feasibility modeling for high-end execution.",
        icon: <Microscope size={30} />,
        color: "from-orange-400 to-amber-500",
    },
    {
        id: "03",
        title: "Project Execution",
        price: "FIXED",
        desc: "Precision engineering implementation.",
        detail: "Full-scale development with high-grade materials and real-time progress monitoring.",
        icon: <Wrench size={30} />,
        color: "from-purple-500 to-indigo-600",
    },
];

export default function UltraWorkflow() {
    return (
        <section className="relative py-36 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
            {/* background glow */}
            <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
            <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full bottom-[-200px] right-[-200px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-28"
                >
                    <span className="text-blue-400 tracking-[0.4em] uppercase text-xs font-bold">
                        Workflow Protocol
                    </span>
                    <h2 className="text-6xl md:text-7xl font-black text-white mt-6">
                        Intelligent
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            {" "}Process
                        </span>
                    </h2>
                    <p className="text-slate-400 mt-6 max-w-xl mx-auto">
                        Our systemized workflow ensures precision engineering and seamless project execution.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-12 perspective-[2000px]">
                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -600, rotateY: 180, rotateX: 80, scale: 0.6 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0, scale: 1 }}
                        transition={{ duration: 1.1, type: "spring", stiffness: 80 }}
                        whileHover={{ rotateY: -8, rotateX: 6, scale: 1.05 }}
                        className="group relative h-[420px] rounded-[30px] backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <CardContent step={steps[0]} />
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 400, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: [400, -40, 10, 0], scale: 1 }}
                        transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                        whileHover={{ rotateY: -10, rotateX: 8, scale: 1.05 }}
                        className="group relative h-[420px] rounded-[30px] backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <CardContent step={steps[1]} />
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: 600, rotateY: -180, rotateX: 80, scale: 0.6 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0, scale: 1 }}
                        transition={{ delay: 0.7, duration: 1.1, type: "spring", stiffness: 90 }}
                        whileHover={{ rotateY: 8, rotateX: 6, scale: 1.05 }}
                        className="group relative h-[420px] rounded-[30px] backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <CardContent step={steps[2]} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* CARD COMPONENT */
function CardContent({ step }: { step: Step }) {
    return (
        <>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${step.color} blur-2xl`} />
            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                    <span className="text-6xl font-black text-white/10">{step.id}</span>
                    <div className="bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold">
                        {step.price}
                    </div>
                </div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-xl group-hover:scale-110 transition`}>
                    {step.icon}
                </div>

                <div>
                    <h3 className="text-2xl font-black text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{step.desc}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.detail}</p>
                </div>

                <button className="group flex items-center justify-between bg-white text-black py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition">
                    Start Step
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition" />
                </button>
            </div>
            <div className="absolute inset-0 rounded-[30px] border border-white/10 group-hover:border-blue-400/50 transition" />
        </>
    );
}