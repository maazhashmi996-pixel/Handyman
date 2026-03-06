"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function FinalSection() {
    return (
        <section className="bg-[#050505] pt-32 pb-12 px-6 relative overflow-hidden">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 opacity-10 [perspective:1000px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(45deg)] origin-center"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left: Contact Info & USP Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-8">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Upgrade?</span>
                        </h2>

                        <p className="text-gray-400 text-xl font-light max-w-md mb-12">
                            Transform your property with precision. Our agents are ready for your free consultation call.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
                                    <Phone className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call our HQ</p>
                                    <p className="text-white text-xl font-bold">+1 (555) 000-TECH</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
                                    <Mail className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Support</p>
                                    <p className="text-white text-xl font-bold">ops@futurefix.us</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Futuristic Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0d0d0d] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative group"
                    >
                        {/* Glowing Border Animation */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                        <div className="relative bg-[#0d0d0d] rounded-[1.9rem]">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase font-bold text-gray-500 ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase font-bold text-gray-500 ml-1">Email</label>
                                        <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold text-gray-500 ml-1">Service Required</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all appearance-none">
                                        <option>Residential Maintenance</option>
                                        <option>Commercial Office Upkeep</option>
                                        <option>Pool & Landscape Tech</option>
                                        <option>Garage Automation</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold text-gray-500 ml-1">Project Details</label>
                                    <textarea rows={4} placeholder="Tell us about your needs..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"></textarea>
                                </div>

                                <button className="w-full bg-white text-black font-black py-5 rounded-xl uppercase tracking-tighter hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 group">
                                    INITIALIZE CONSULTATION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-black text-white tracking-tighter">FUTURE<span className="text-cyan-500">FIX</span></h3>
                        <p className="text-gray-600 text-sm mt-2">© 2026 Next-Gen Maintenance. All Rights Reserved.</p>
                    </div>

                    <div className="flex gap-6">
                        <Instagram className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Facebook className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    </div>

                    <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Tech</a>
                    </div>
                </div>
            </div>
        </section>
    );
}