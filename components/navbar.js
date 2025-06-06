"use client"
import React from 'react'

import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dancing',
});


import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experiences', href: '#experiences' },
        { name: 'Endorsements', href: '#endorsements' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>

            {/* Main Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${isScrolled
                ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10'
                : 'bg-transparent'
                }`}>
                {/* Animated border line */}
                <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-700 ${isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Animated Logo/Name */}
                        <div className="animated-name-container">
                            <span className={`animated-name ${dancingScript.className} text-3xl md:text-5xl`}>Aman Mourya</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <span className="relative z-10 font-medium tracking-wide">
                                        {link.name}
                                    </span>
                                    {/* Hover background */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                                    {/* Bottom border animation */}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 blur-sm"></div>
                                </a>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={handleClick}
                            className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <div className="relative">
                                {isOpen ? (
                                    <X className="w-5 h-5 text-purple-400 transition-transform duration-300 rotate-0" />
                                ) : (
                                    <Menu className="w-5 h-5 text-purple-400 transition-transform duration-300" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-20 left-0 w-full z-40 md:hidden transition-all duration-500 ease-out ${isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                <div className="bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
                    <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`mobile-nav-link block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-300 ${isOpen
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}
                                style={{
                                    transitionDelay: isOpen ? `${index * 100 + 150}ms` : '0ms'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="relative group">
                                    <span className="relative z-10">{link.name}</span>
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                                    <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 ease-out transform -translate-y-1/2"></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            

            <style jsx>{`
                .animated-name {
                    font-family: 'Dancing Script', cursive;
                    font-weight: 700;
                    color: transparent;
                    background: linear-gradient(
                        135deg,
                        #9c27b0,
                        #e91e63,
                        #673ab7,
                        #ff4081
                    );
                    background-clip: text;
                    -webkit-background-clip: text;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    filter: drop-shadow(0 0 12px rgba(156, 39, 176, 0.4));
                }

                .animated-name:hover {
                    transform: translateY(-1px);
                    filter: drop-shadow(0 0 16px rgba(156, 39, 176, 0.6))
                            drop-shadow(0 0 24px rgba(233, 30, 99, 0.4));
                }

                .nav-link {
                    position: relative;
                    overflow: hidden;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.05),
                        transparent
                    );
                    transition: left 0.5s ease;
                }

                .nav-link:hover::after {
                    left: 100%;
                }

                .mobile-nav-link {
                    position: relative;
                    overflow: hidden;
                }

                .mobile-nav-link::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.03),
                        transparent
                    );
                    transition: left 0.5s ease;
                }

                .mobile-nav-link:hover::after {
                    left: 100%;
                }

                /* Smooth scroll behavior */
                html {
                    scroll-behavior: smooth;
                }

                /* Custom scrollbar */
                ::-webkit-scrollbar {
                    width: 6px;
                }

                ::-webkit-scrollbar-track {
                    background: #1a1a1a;
                }

                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(45deg, #9c27b0, #e91e63);
                    border-radius: 3px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(45deg, #7b1fa2, #c2185b);
                }
            `}</style>
        </>
    )
}

export default Navbar