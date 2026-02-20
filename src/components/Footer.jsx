import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darker border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Subtle light leak effect */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary/20 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-3xl font-black tracking-widest text-white mb-6 font-heading drop-shadow-sm">
                            PK<span className="text-secondary">TOURS</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            We organize premium tours to the Northern Areas of Pakistan. Experience the majestic mountains, serene lakes, and rich culture with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm font-heading">Explore</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-secondary hover:pl-2 transition-all duration-300 block">Home</a></li>
                            <li><a href="#about" className="hover:text-secondary hover:pl-2 transition-all duration-300 block">About</a></li>
                            <li><a href="#included" className="hover:text-secondary hover:pl-2 transition-all duration-300 block">Services</a></li>
                            <li><a href="#contacts" className="hover:text-secondary hover:pl-2 transition-all duration-300 block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm font-heading">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center space-x-4 group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                                    <MapPin size={18} className="text-secondary" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">Skardu Road, Gilgit, PK</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                                    <Phone size={18} className="text-secondary" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">+92 300 1234567</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                                    <Mail size={18} className="text-secondary" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">info@pktours.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm font-heading">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-secondary hover:border-secondary hover:text-dark hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-secondary hover:border-secondary hover:text-dark hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-secondary hover:border-secondary hover:text-dark hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <div>&copy; {new Date().getFullYear()} PK TOURS. All rights reserved.</div>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
