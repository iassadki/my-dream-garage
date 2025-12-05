"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { useActiveSection } from "../../hooks/useActiveSection";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: "#presentation", label: "Présentation", id: "presentation" },
        { href: "#expertise", label: "Expertise", id: "expertise" },
        { href: "#skills", label: "Compétences", id: "skills" },
        { href: "#projects", label: "Projets", id: "projects" },
        { href: "#experiences", label: "Experiences", id: "experiences" },
        { href: "#resume", label: "CV", id: "resume" },
    ];

    return (
        <header className="bg-white px-6 py-3 shadow-md fixed top-0 w-full z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary hover:text-primary-600 transition-colors">
                    {/* iassadki */}
                    <Image
                        src="/images/header/ia-logo.png"
                        alt="Logo Header"
                        width={60}
                        height={60}
                        className="object-contain"
                        unoptimized
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 font-medium text-black">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors hover:text-primary ${
                                activeSection === link.id 
                                    ? 'text-primary font-semibold' 
                                    : 'text-black'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <Link href="#contact">
                        <ButtonPrimary>Me contacter</ButtonPrimary>
                    </Link>
                </div>

                {/* Burger Menu (Mobile) */}
                <button
                    className="md:hidden text-black"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-4 pb-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg px-2 py-1 hover:text-primary transition-colors ${
                                activeSection === link.id 
                                    ? 'text-primary font-semibold' 
                                    : 'text-black'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-2">
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                            <ButtonPrimary>Me contacter</ButtonPrimary>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
