import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.brand}>
                            VEER <span>FITNESS</span>
                        </Link>
                        <p className={styles.desc}>
                            The premier fitness destination in Shankarpally. Build strength, discipline, and a healthier life with us.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            {/* Placeholders for social icons if needed */}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact Us</h4>
                        <ul className={styles.links}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={18} color="var(--primary-color)" />
                                <span>Shankarpally, Hyderabad</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} color="var(--primary-color)" />
                                <span>+91 90300 64239</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} color="var(--primary-color)" />
                                <span>veerfitness.skp@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Veer Fitness Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
