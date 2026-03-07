"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Send,
    Phone,
    Mail,
    ArrowUpRight,
    HardHat,
    ShieldCheck,
    Zap,
} from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function FinalSectionCommand() {
    return (
        <section className="bg-slate-950 py-32 px-6 relative overflow-hidden">

            {/* Ultra Vibrant Background Floating Lights */}
            <motion.div
                animate={{ x: [0, 60, -60, 0], y: [0, 40, -40, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[160px]"
            />

            <motion.div
                animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[160px]"
            />

            {/* Interactive Scanlines Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-10 opacity-[0.06]"
                style={{
                    backgroundImage: "linear-gradient(transparent 50%, #000 50%)",
                    backgroundSize: "100% 4px",
                }}
            />

            <div className="container mx-auto relative z-20">

                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT PANEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 space-y-12"
                    >

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                            >
                                <Zap size={14} className="fill-cyan-400" /> System Online
                            </motion.div>

                            <h2 className="text-7xl md:text-[110px] font-black text-white uppercase leading-[0.8] tracking-tighter">
                                Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-500 drop-shadow-[0_10px_20px_rgba(249,115,22,0.3)]">
                                    The Future.
                                </span>
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                Secure your project slot. Our <span className="text-white">engineering command center</span> is ready to process your structural data.
                            </p>
                        </div>

                        {/* VIBRANT CONTACT CARDS */}
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: Phone, label: "Hotline", val: "+1 (800) FIX-TECH", color: "text-cyan-400", bg: "group-hover:bg-cyan-500" },
                                { icon: Mail, label: "Inquiries", val: "ops@futurefix.us", color: "text-orange-500", bg: "group-hover:bg-orange-500" },
                            ].map((itemData, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="flex items-center gap-6 p-6 border border-white/10 rounded-[2rem] transition-all bg-white/5 group backdrop-blur-2xl shadow-xl"
                                >
                                    <div className={`p-4 bg-white/5 rounded-2xl ${itemData.color} ${itemData.bg} group-hover:text-white transition-all duration-500 shadow-inner`}>
                                        <itemData.icon size={24} strokeWidth={2.5} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black mb-1">
                                            {itemData.label}
                                        </p>
                                        <p className="text-xl text-white font-bold tracking-tight">
                                            {itemData.val}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                    {/* RIGHT PANEL FORM (NEON GLASS) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 p-10 md:p-16 rounded-[4rem] backdrop-blur-3xl relative shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                    >
                        {/* decorative glowing icon */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 text-orange-500/20 blur-[2px]"
                        >
                            <HardHat size={180} strokeWidth={0.5} />
                        </motion.div>

                        <form className="space-y-10 relative z-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] text-cyan-400 uppercase font-black tracking-[0.3em] ml-2">Partner Name</label>
                                    <input
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all placeholder:text-white/10 font-bold"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] text-cyan-400 uppercase font-black tracking-[0.3em] ml-2">Secure Email</label>
                                    <input
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all placeholder:text-white/10 font-bold"
                                        placeholder="nexus@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] text-cyan-400 uppercase font-black tracking-[0.3em] ml-2">Deployment Type</label>
                                <div className="relative">
                                    <select className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 outline-none appearance-none cursor-pointer font-bold">
                                        <option className="bg-slate-950">Industrial Maintenance</option>
                                        <option className="bg-slate-950">Luxury Estate Upkeep</option>
                                        <option className="bg-slate-950">Structural Engineering</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* ULTRA CTA BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6,182,212,0.5)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:from-white hover:to-white hover:text-slate-950 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl border-t border-white/30"
                            >
                                Initialize Data Stream
                                <Send size={18} strokeWidth={3} />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>

                {/* FOOTER SECTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                        <p>© 2026 FUTUREFIX COMMAND CENTER</p>
                    </div>

                    <div className="flex gap-12">
                        {['Privacy', 'Security', 'Terms'].map(link => (
                            <span key={link} className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">
                                {link}
                            </span>
                        ))}
                    </div>

                    <ShieldCheck size={24} className="text-cyan-500/40" />
                </motion.div>

            </div>
        </section>
    );
}