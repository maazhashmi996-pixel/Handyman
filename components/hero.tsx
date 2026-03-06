"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">

            {/* VIP 3D House Background with Scanner Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-40 scale-105" />

                {/* Scanner Animation */}
                <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-1 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)] z-10"
                />
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 w-full z-50 px-8 py-8 flex justify-between items-center container mx-auto">
                <div className="text-3xl font-black tracking-tighter text-white">HANDY<span className="text-orange-500">MAN</span></div>
                <div className="hidden md:flex gap-10 text-xs font-bold text-white/70 uppercase tracking-widest">
                    {['About', 'Services', 'Projects', 'Gallery'].map((item) => (
                        <a key={item} href="#" className="hover:text-orange-500 transition-colors">{item}</a>
                    ))}
                </div>
                <button className="bg-white text-slate-950 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                    Request Quote
                </button>
            </nav>

            {/* Hero Content */}
            <section className="relative h-screen w-full flex items-center justify-center">
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-md px-6 py-2 rounded-full text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/30">
                            <Sparkles size={12} /> Elite Property Engineering
                        </div>

                        <h1 className="text-7xl md:text-[160px] font-black text-white uppercase leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
                            Precision <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white">Craftsmanship.</span>
                        </h1>

                        <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                            Transforming your vision into structural reality. Expert maintenance for the most discerning properties.
                        </p>

                        <button className="bg-orange-500 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-950 transition-all flex items-center gap-3 mx-auto shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                            Initialize Project <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}