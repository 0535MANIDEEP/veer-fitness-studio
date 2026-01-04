"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.content}`}>
                <Link href="/" className={styles.logo}>
                    VEER <span>FITNESS</span>
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+911234567890" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        <Phone size={16} style={{ marginRight: '8px' }} /> Call Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+911234567890" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                        Call Now
                    </a>
                </div>
            )}
        </nav>
    );
}
