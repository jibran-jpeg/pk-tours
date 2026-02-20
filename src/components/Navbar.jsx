import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }) => (
    <a href={href} className="hover:text-white transition-colors">
        {children}
    </a>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-white"
                >
                    <Globe size={20} className="text-emerald-500" />
                    <span className="font-bold tracking-[0.2em] text-sm uppercase">PK TOURS</span>
                </motion.div>

                {/* Desktop Menu */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden md:flex items-center gap-12 text-gray-300 text-xs font-semibold tracking-widest uppercase"
                >
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#included">Included</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-8 py-2 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all"
                >
                    BOOK
                </motion.button>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-emerald-500 transition-colors">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="md:hidden fixed top-[72px] left-0 w-full bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-start pt-20 space-y-8 border-t border-white/10 overflow-hidden z-40"
                        style={{ height: 'calc(100vh - 72px)' }}
                    >
                        {['About', 'Included', 'Contacts'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                className="text-gray-300 hover:text-emerald-500 text-xl font-light tracking-[0.2em] uppercase transition-colors font-serif"
                            >
                                {item}
                            </motion.a>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-12 py-4 border border-emerald-500 rounded-full text-emerald-500 text-xs font-bold tracking-widest hover:bg-emerald-500 hover:text-black transition-all mt-8"
                        >
                            BOOK NOW
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
