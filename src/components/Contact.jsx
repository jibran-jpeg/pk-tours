import React from 'react';
import { Globe, Instagram, Twitter, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacts" className="relative pt-20 lg:pt-32 bg-black min-h-screen font-sans transition-colors duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/rakaposhi.png"
                    alt="Rakaposhi Mountain"
                    className="w-full h-full object-cover opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black transition-colors duration-500" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col min-h-screen lg:min-h-0 pb-10 lg:pb-0">
                <div className="max-w-md w-full mx-auto lg:mx-0 bg-white/[0.05] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 mb-16 lg:mb-32 shadow-2xl mt-8 lg:mt-0 flex-grow lg:flex-grow-0 transition-colors duration-500">
                    <h3 className="text-2xl text-white font-light mb-2 font-serif transition-colors">Want to join us,</h3>
                    <h3 className="text-2xl text-white font-light mb-8 font-serif italic transition-colors"><span className="text-emerald-500 not-italic">but still have</span> questions?</h3>

                    <form className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-[10px] text-white/40 uppercase tracking-widest transition-colors">Leave a request</p>
                            <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors" />
                        </div>
                        <input type="tel" placeholder="Phone number" className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors" />
                        <textarea placeholder="Comment" rows="2" className="w-full bg-transparent border-b border-white/20 py-2 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors resize-none"></textarea>

                        <button type="button" className="w-full bg-white text-black py-4 font-bold text-xs tracking-[0.3em] uppercase hover:bg-emerald-500 hover:text-black transition-all shadow-lg active:scale-95 duration-300">
                            SEND
                        </button>
                    </form>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between py-10 lg:py-12 border-t border-white/10 gap-8 mt-auto lg:mt-0 transition-colors duration-500">
                    <div className="flex items-center gap-2 text-white transition-colors">
                        <Globe size={16} className="text-emerald-500" />
                        <span className="font-bold tracking-[0.2em] text-xs uppercase">PK TOURS</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/40 text-[10px] font-semibold tracking-widest uppercase transition-colors">
                        <a href="#about" className="hover:text-emerald-500 transition-colors p-2 md:p-0">About</a>
                        <a href="#included" className="hover:text-emerald-500 transition-colors p-2 md:p-0">Included</a>
                        <a href="#contacts" className="hover:text-emerald-500 transition-colors p-2 md:p-0">Contacts</a>
                    </div>
                    <div className="flex gap-8 md:gap-6 text-white/40 transition-colors">
                        <Instagram size={18} className="hover:text-emerald-500 cursor-pointer transition-colors p-1 md:p-0" />
                        <Twitter size={18} className="hover:text-emerald-500 cursor-pointer transition-colors p-1 md:p-0" />
                        <Send size={18} className="hover:text-emerald-500 cursor-pointer transition-colors p-1 md:p-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
