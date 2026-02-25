import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
    const base = import.meta.env.BASE_URL;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading time (you could tie this to actual image loading if needed)
        const loadDuration = 2000; // 2 seconds
        const intervalTime = 20;
        const step = 100 / (loadDuration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => onLoadingComplete(), 400); // Small pause at 100% before firing complete
                    return 100;
                }
                return prev + step;
            });
        }, intervalTime);

        // Hide default scrollbar completely during load
        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(timer);
            document.body.style.overflow = 'auto'; // Restore scroll on unmount
        };
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            <motion.div
                key="preloader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-sans"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${base}assets/images/rakaposhi.png`}
                        alt="Loading background"
                        className="w-full h-full object-cover opacity-10 grayscale blur-sm scale-110"
                    />
                </div>

                {/* Animated Logo / Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center mb-8"
                >
                    <h1 className="text-3xl md:text-5xl font-black tracking-[0.4em] text-white uppercase font-serif drop-shadow-2xl">
                        PK<span className="text-emerald-500">TOURS</span>
                    </h1>
                    <p className="text-white/40 text-xs tracking-[0.3em] font-bold uppercase mt-2">Beyond the Karakoram</p>
                </motion.div>

                {/* Loading Bar container */}
                <div className="relative z-10 w-64 md:w-96 h-px bg-white/20 overflow-hidden mx-auto mt-4">
                    <motion.div
                        className="h-full bg-emerald-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <div className="relative z-10 mt-4 text-emerald-500 text-xs font-bold tracking-widest font-serif">
                    {Math.round(progress).toString().padStart(3, '0')}%
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Preloader;
