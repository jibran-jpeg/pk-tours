import React from 'react';
import { Users, Plane, Bus, Hotel } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const items = [
        { icon: <Users size={24} />, title: "Guides", desc: "2 awesome local guides who know everything about Pakistan!" },
        { icon: <Plane size={24} />, title: "Flights", desc: "Internal routes: Islamabad — Skardu — Lahore included." },
        { icon: <Bus size={24} />, title: "Transfers", desc: "Comfortable 4x4 jeeps for northern trails and private cars." },
        { icon: <Hotel size={24} />, title: "Hotels", desc: "Premium accommodation with local breakfast included." },
    ];

    return (
        <section id="included" className="bg-white dark:bg-[#0a0a0a] py-20 lg:py-32 px-6 lg:px-8 overflow-hidden font-sans transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 lg:mb-20">
                    <h2 className="text-3xl md:text-5xl font-light text-black dark:text-white uppercase tracking-[0.2em] font-serif whitespace-nowrap transition-colors">What's Included</h2>
                    <div className="hidden md:block h-px bg-black/10 dark:bg-white/20 flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="p-8 border border-black/5 dark:border-white/10 rounded-2xl group hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors duration-500 h-full flex flex-col cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                        >
                            <div className="text-emerald-500 mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 drop-shadow-md">
                                {item.icon}
                            </div>
                            <h3 className="text-black dark:text-white font-bold text-lg uppercase tracking-widest mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-500 text-xs leading-relaxed uppercase tracking-widest mt-auto group-hover:text-black dark:group-hover:text-gray-400 transition-colors duration-300">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
