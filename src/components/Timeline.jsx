import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const base = import.meta.env.BASE_URL;
    const timeline = [
        { days: "Days 1-3", title: "Islamabad & Skardu", desc: "Acclimatize with lush trail hikes and fly to the mountains.", images: [`${base}assets/images/skardu.png`, `${base}assets/images/thumb_valleys.png`] },
        { days: "Days 4-10", title: "The High North", desc: "Trek through Hunza. Experience the raw beauty of the Karakoram peaks.", images: [`${base}assets/images/hunza.png`, `${base}assets/images/rakaposhi.png`] },
        { days: "Days 11-15", title: "Gilgit & Naltar", desc: "Descend to the valleys for a sensory explosion of history and lakes.", images: [`${base}assets/images/gilgit.png`, `${base}assets/images/thumb_tradition.png`] },
    ];

    return (
        <section id="about" className="bg-[#0a0a0a] py-20 lg:py-32 px-6 lg:px-8 overflow-hidden font-sans transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 md:gap-8 mb-12 lg:mb-20">
                    <div className="h-px bg-white/20 flex-1" />
                    <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-[0.2em] font-serif text-center drop-shadow-lg text-shadow-sm px-2 transition-colors">The Expedition</h2>
                    <div className="h-px bg-white/20 flex-1" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400 max-w-sm text-sm leading-relaxed uppercase tracking-wider transition-colors"
                        >
                            We've curated a high-altitude journey through the <span className="text-emerald-500 font-bold">Karakoram</span> range, combined with the soul-stirring heritage of the north.
                        </motion.p>
                        <div className="pt-8 md:pt-20">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-gray-400 max-w-sm text-sm leading-relaxed uppercase tracking-wider transition-colors"
                            >
                                This isn't just a tour; it's a trekking expedition. From high-altitude base camps to the bustling narrow streets of Gilgit, we show you <span className="text-emerald-500">the real Pakistan</span>.
                            </motion.p>
                        </div>
                    </div>

                    <div className="relative pl-6 md:pl-8 mt-12 lg:mt-0">
                        {/* Timeline Line */}
                        <div className="absolute top-0 bottom-0 left-[2.5px] w-px bg-white/10" />

                        <div className="space-y-16 lg:space-y-32">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="relative"
                                >
                                    <div className="absolute top-2 -left-[25px] md:-left-[33px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] transition-colors" />
                                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                                        <div className="min-w-[120px]">
                                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors">{item.days}</p>
                                            <h3 className="text-white font-bold text-lg uppercase tracking-widest transition-colors">{item.title}</h3>
                                            <p className="text-gray-500 text-xs mt-2 leading-relaxed hidden md:block">{item.desc}</p>
                                        </div>
                                        <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory mt-2 md:mt-0">
                                            {item.images.map((img, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                                                    whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                                    transition={{ duration: 0.8, delay: (idx * 0.1) + (i * 0.2) }}
                                                    viewport={{ once: true, margin: "100px" }}
                                                    className={`min-w-[120px] w-[140px] md:w-32 h-24 rounded-lg overflow-hidden border border-white/5 flex-shrink-0 snap-start ${i === 1 ? 'md:mt-8' : ''}`}
                                                >
                                                    <img src={img} alt={item.title} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer" />
                                                </motion.div>
                                            ))}
                                        </div>
                                        <p className="text-gray-500 text-xs mt-1 leading-relaxed md:hidden">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
