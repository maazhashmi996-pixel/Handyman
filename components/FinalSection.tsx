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
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function FinalSectionCommand() {
    return (
        <section className="bg-slate-950 py-32 px-6 relative overflow-hidden">

            {/* Background Floating Lights */}
            <motion.div
                animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px]"
            />

            <motion.div
                animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
                transition={{ duration: 18, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[150px]"
            />

            {/* Scanlines */}
            <div
                className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(transparent 50%, #000 50%)",
                    backgroundSize: "100% 4px",
                }}
            />

            <div className="container mx-auto relative z-20">

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* LEFT PANEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -120, rotate: -8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 space-y-12"
                    >

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            className="space-y-6"
                        >

                            <motion.span
                                variants={item}
                                className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
                            >
                                <Zap size={14} /> System Online
                            </motion.span>

                            <motion.h2
                                variants={item}
                                className="text-7xl md:text-9xl font-black text-white uppercase leading-[0.8] tracking-tighter"
                            >
                                Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                                    The Future.
                                </span>
                            </motion.h2>

                            <motion.p
                                variants={item}
                                className="text-slate-400 text-lg font-medium max-w-md"
                            >
                                Secure your project slot. Our engineering command center
                                is ready to process your structural data.
                            </motion.p>

                        </motion.div>

                        {/* CONTACT CARDS */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            className="flex flex-col gap-4"
                        >

                            {[
                                { icon: Phone, label: "Hotline", val: "+1 (800) FIX-TECH" },
                                { icon: Mail, label: "Inquiries", val: "ops@futurefix.us" },
                            ].map((itemData, i) => (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-6 p-6 border border-white/5 rounded-2xl hover:border-blue-500/60 transition bg-white/5 group backdrop-blur-xl"
                                >

                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-3 bg-white/5 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"
                                    >
                                        <itemData.icon size={20} />
                                    </motion.div>

                                    <div>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-black">
                                            {itemData.label}
                                        </p>
                                        <p className="text-white font-bold">
                                            {itemData.val}
                                        </p>
                                    </div>

                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* RIGHT PANEL FORM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] backdrop-blur-xl relative"
                    >

                        {/* decorative icon */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 right-10 text-white/5"
                        >
                            <HardHat size={90} strokeWidth={1} />
                        </motion.div>

                        <motion.form
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            className="space-y-8"
                        >

                            <div className="grid md:grid-cols-2 gap-8">

                                <motion.div variants={item} className="space-y-2">
                                    <label className="text-[10px] text-blue-400 uppercase font-black tracking-[0.2em]">
                                        Partner Name
                                    </label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-white/20"
                                        placeholder="John Doe"
                                    />
                                </motion.div>

                                <motion.div variants={item} className="space-y-2">
                                    <label className="text-[10px] text-blue-400 uppercase font-black tracking-[0.2em]">
                                        Secure Email
                                    </label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-white/20"
                                        placeholder="nexus@domain.com"
                                    />
                                </motion.div>

                            </div>

                            <motion.div variants={item} className="space-y-2">
                                <label className="text-[10px] text-blue-400 uppercase font-black tracking-[0.2em]">
                                    Deployment Type
                                </label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer">
                                    <option className="bg-slate-900">
                                        Industrial Maintenance
                                    </option>
                                    <option className="bg-slate-900">
                                        Luxury Estate Upkeep
                                    </option>
                                </select>
                            </motion.div>

                            {/* CTA BUTTON */}
                            <motion.button
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(59,130,246,0.4)",
                                        "0 0 25px rgba(59,130,246,0.6)",
                                        "0 0 0px rgba(59,130,246,0.4)",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-3"
                            >
                                Initialize Data Stream
                                <ArrowUpRight size={16} />
                            </motion.button>

                        </motion.form>

                    </motion.div>

                </div>

                {/* FOOTER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500"
                >

                    <p>© 2026 FUTUREFIX COMMAND CENTER</p>

                    <div className="flex gap-10">
                        <span className="hover:text-white cursor-pointer transition-colors">
                            Privacy
                        </span>
                        <span className="hover:text-white cursor-pointer transition-colors">
                            Security
                        </span>
                        <span className="hover:text-white cursor-pointer transition-colors">
                            Terms
                        </span>
                    </div>

                    <ShieldCheck size={20} className="text-white/20" />

                </motion.div>

            </div>
        </section>
    );
}