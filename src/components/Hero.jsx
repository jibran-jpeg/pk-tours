import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Instagram, Twitter, Send } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Scroll Parallax
    const yTextScroll = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yBgScroll = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Mouse Move Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 100 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const xBgMouse = useTransform(mouseXSpring, [-1, 1], ["-2%", "2%"]);
    const yBgMouse = useTransform(mouseYSpring, [-1, 1], ["-2%", "2%"]);

    const xTextMouse = useTransform(mouseXSpring, [-1, 1], ["-5%", "5%"]);
    const yTextMouse = useTransform(mouseYSpring, [-1, 1], ["-5%", "5%"]);

    // Combine transforms safely at top level
    const xTextCombined = useTransform(xTextMouse, (x) => `calc(-50% + ${x})`);
    const yTextCombined = useTransform(yTextMouse, (y) => `calc(12% + ${y})`);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const cards = [
        { label: "5 Valleys", desc: "Explore Peaks", img: "/assets/images/thumb_valleys.png" },
        { label: "12 Days", desc: "Full Itinerary", img: "/assets/images/hunza.png" },
        { label: "Memories", desc: "Scenic Views", img: "/assets/images/rakaposhi.png" },
        { label: "Local Food", desc: "Taste specific", img: "/assets/images/thumb_food.png" },
        { label: "Tradition", desc: "Local Culture", img: "/assets/images/thumb_tradition.png" },
    ];

    return (
        <section className="relative min-h-screen bg-black overflow-hidden pt-32" ref={ref}>
            {/* Background Image - Local K2 Image with Scroll & Mouse Parallax */}
            <motion.div
                className="absolute inset-0 z-0 scale-105"
                style={{
                    y: yBgScroll,
                    x: xBgMouse,
                    top: yBgMouse // Use top instead of combining y directly for ease
                }}
            >
                <img
                    src="/assets/images/hero_k2.png"
                    alt="K2 Mountain Pakistan"
                    className="w-full h-full object-cover opacity-70 -scale-x-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </motion.div>

            {/* Giant Text - Scroll & Mouse Parallax */}
            <motion.div
                className="absolute top-[20%] md:top-[12%] left-1/2 -translate-x-1/2 z-0 text-center w-full px-2 origin-center"
                style={{
                    y: yTextScroll,
                    x: xTextCombined,
                    top: yTextCombined,
                }}
            >
                <h1 className="text-[24vw] md:text-[15vw] font-black text-white/[0.05] leading-none select-none tracking-tighter uppercase font-serif hover:text-white/[0.08] transition-colors duration-700">
                    NORTHERN
                </h1>
                <h1 className="text-[20vw] md:text-[12vw] font-black text-white/[0.1] leading-none select-none tracking-tighter uppercase font-serif -mt-4 md:-mt-8 lg:-mt-12 hover:text-white/[0.15] transition-colors duration-700">
                    PAKISTAN
                </h1>
            </motion.div>

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 w-full z-10">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 items-end gap-12 pb-4 md:pb-8">
                    {/* Left: Info Cards - Horizontal Scroll on Mobile */}
                    <div className="lg:col-span-9 flex overflow-x-auto hide-scrollbar gap-4 pb-4 md:pb-0 snap-x snap-mandatory w-full pt-4 pr-8 md:pr-0">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="flex-shrink-0 snap-start w-32 h-48 md:w-32 md:h-48 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10"
                            >
                                <img src={card.img} alt={card.label} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-3 right-3 z-10">
                                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter leading-none mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{card.label}</p>
                                    <p className="text-[10px] text-white/90 leading-tight uppercase font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Expedition Callout */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-end w-full">
                        <div className="relative mb-4 md:mb-8 text-center lg:text-right w-full">
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Seasonal Expedition</p>
                            <h2 className="text-4xl lg:text-3xl text-white font-light font-serif mb-6 leading-tight">Beyond the <br /><span className="italic text-emerald-500 font-normal">Karakoram</span></h2>
                            <button className="bg-white text-black px-12 py-4 md:py-3 rounded-md font-bold text-xs tracking-[0.2em] uppercase hover:bg-emerald-500 hover:text-white transition-all shadow-2xl w-full md:w-auto">
                                JOIN TREK
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Socials Floating */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white/40 z-20">
                <Instagram size={18} className="hover:text-emerald-500 cursor-pointer transition-colors" />
                <Twitter size={18} className="hover:text-emerald-500 cursor-pointer transition-colors" />
                <Send size={18} className="hover:text-emerald-500 cursor-pointer transition-colors" />
            </div>
        </section>
    );
};

export default Hero;
