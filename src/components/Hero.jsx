import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Send } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const base = import.meta.env.BASE_URL;

    const cards = [
        { label: "5 Valleys", desc: "Explore Peaks", img: `${base}assets/images/thumb_valleys.png` },
        { label: "12 Days", desc: "Full Itinerary", img: `${base}assets/images/hunza.png` },
        { label: "Memories", desc: "Scenic Views", img: `${base}assets/images/rakaposhi.png` },
        { label: "Local Food", desc: "Taste specific", img: `${base}assets/images/thumb_food.png` },
        { label: "Tradition", desc: "Local Culture", img: `${base}assets/images/thumb_tradition.png` },
    ];

    return (
        <section className="relative min-h-[100dvh] w-full bg-black overflow-hidden pt-28 md:pt-32 flex flex-col justify-between" ref={ref}>
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controls={false}
                    poster={`${base}assets/images/hero_k2.png`}
                    className="w-full h-full object-cover opacity-70 pointer-events-none select-none"
                    style={{ WebkitUserSelect: 'none' }}
                >
                    <source src={`${base}hero-video-best-compressed.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </div>

            {/* Cinematic Center Title */}
            <div className="relative z-0 flex flex-col items-center justify-start md:justify-center px-4 pointer-events-none w-full mt-2 md:mt-0 md:flex-1 shrink-0">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center gap-3 md:gap-8 mb-4 md:mb-12"
                >
                    <span className="w-8 md:w-24 h-[1px] bg-emerald-500/80"></span>
                    <span className="text-emerald-400 text-[9px] md:text-sm font-medium tracking-[0.4em] md:tracking-[0.5em] uppercase md:ml-3 shadow-black [text-shadow:0px_0px_10px_rgba(0,0,0,1)]">
                        Discover The Unseen
                    </span>
                    <span className="w-8 md:w-24 h-[1px] bg-emerald-500/80"></span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center w-full max-w-[100vw] overflow-hidden"
                >
                    <h1 className="text-[17vw] sm:text-[14vw] md:text-[9vw] font-light text-white uppercase tracking-[0.02em] md:tracking-[0.05em] font-serif leading-[0.85] [text-shadow:0px_10px_30px_rgba(0,0,0,0.8)] text-center w-full">
                        NORTHERN
                    </h1>
                    <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-light text-emerald-50 uppercase tracking-[0.35em] md:tracking-[0.6em] font-sans leading-none mt-2 md:mt-4 md:ml-6 [text-shadow:0px_10px_30px_rgba(0,0,0,0.8)] text-center w-full pl-[0.35em] md:pl-[0.6em]">
                        PAKISTAN
                    </h1>
                </motion.div>
            </div>

            {/* Hero Content */}
            <div className="relative w-full z-10 pointer-events-none mt-6 md:mt-0 shrink-0">
                <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 items-end gap-6 md:gap-12 pb-6 md:pb-10 pointer-events-auto">

                    {/* Right: Expedition Callout - Shown on top on mobile */}
                    <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col items-start lg:items-end w-full">
                        <div className="relative text-left lg:text-right w-full flex flex-col sm:items-start lg:items-end">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                                className="text-emerald-400 md:text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-2 md:mb-4 flex items-center lg:justify-end gap-3 [text-shadow:0px_2px_10px_rgba(0,0,0,0.8)] md:[text-shadow:none]"
                            >
                                <span className="w-8 h-[1px] bg-emerald-500/50 inline-block lg:hidden"></span>
                                Seasonal Expedition
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                                className="text-[28px] sm:text-4xl lg:text-3xl text-white font-light font-serif mb-4 md:mb-6 leading-[1.1] tracking-tight [text-shadow:2px_4px_10px_rgba(0,0,0,0.8)]"
                            >
                                Beyond the <br className="hidden md:block" /><span className="italic text-emerald-400 font-normal">Karakoram</span>
                            </motion.h2>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
                                className="backdrop-blur-md bg-white/10 md:bg-white border border-white/20 md:border-none text-white md:text-black px-8 py-3.5 md:px-12 md:py-3 rounded-full md:rounded-md font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-xl w-[220px] sm:w-auto overflow-hidden relative group"
                            >
                                <span className="relative z-10">JOIN TREK</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Left: Info Cards - Horizontal Scroll on Mobile */}
                    <div className="order-2 lg:order-1 lg:col-span-9 flex overflow-x-auto hide-scrollbar gap-3 md:gap-4 pb-2 md:pb-0 snap-x snap-mandatory w-full -mx-5 px-5 md:mx-0 md:px-0 scroll-smooth">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 + (0.1 * idx) }}
                                className="flex-shrink-0 snap-center md:snap-start w-[120px] h-[155px] md:w-32 md:h-48 rounded-2xl md:rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 md:border-white/5 hover:border-white/20 transition-all shadow-2xl"
                            >
                                <img src={card.img} alt={card.label} className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-transform duration-1000 md:scale-100 scale-105 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 md:bg-black/50 md:group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 opacity-90 md:opacity-0 transition-opacity duration-300">
                                    <span className="w-2.5 h-[1px] bg-emerald-400"></span>
                                    <span className="text-[7px] font-bold text-emerald-400 uppercase tracking-widest leading-none shadow-black [text-shadow:1px_2px_4px_rgba(0,0,0,0.8)]">0{idx + 1}</span>
                                </div>
                                <div className="absolute bottom-3 left-3 right-3 md:left-3 md:right-3 z-10 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                                    <p className="text-[12px] md:text-[11px] font-semibold text-white/95 uppercase tracking-wide leading-tight mb-0.5 shadow-black [text-shadow:1px_2px_4px_rgba(0,0,0,0.8)]">{card.label}</p>
                                    <p className="text-[9px] md:text-[9px] text-white/70 leading-tight uppercase font-medium tracking-widest">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Socials Floating */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white/40 z-20">
                <a href="#" aria-label="Instagram" className="hover:text-emerald-500 cursor-pointer transition-colors"><Instagram size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-emerald-500 cursor-pointer transition-colors"><Twitter size={18} /></a>
                <a href="#" aria-label="Telegram" className="hover:text-emerald-500 cursor-pointer transition-colors"><Send size={18} /></a>
            </div>
        </section>
    );
};

export default Hero;
