import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Veer Fitness Studio',
    description: 'Get in touch with Veer Fitness Studio in Shankarpally.',
};

export default function Contact() {
    return (
        <main>
            <Navbar />

            <section style={{
                padding: '120px 0 60px',
                backgroundColor: 'var(--surface-color)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Contact <span className="text-primary">Us</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Ready to start? Visit us directly for the best experience.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">

                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Get In Touch</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                                Managed by <strong style={{ color: '#fff' }}>Rajesh Goud Tatikonda</strong>
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--surface-highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                        <MapPin color="var(--primary-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Visit Us</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            Veer Fitness Studio,<br />
                                            7-113/1 Sai Colony Entrance,<br />
                                            Shankarpalle, Telangana 501203
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--surface-highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                        <Phone color="var(--primary-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Call Us</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            <a href="tel:+919030064239" style={{ textDecoration: 'underline' }}>+91 90300 64239</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--surface-highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                        <MessageCircle color="var(--primary-color)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>WhatsApp</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            <a href="https://wa.me/919030064239" target="_blank" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', marginTop: '5px' }}>
                                                Chat on WhatsApp
                                            </a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '400px',
                                backgroundColor: '#2a2a2a',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#666',
                                border: '1px solid var(--border-color)'
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943033.0501682498!2d74.66789760316273!3d17.97936850371407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbeff291f14611%3A0xb1686a994f9762e0!2sVEER%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1767594763811!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, opacity: 0.7 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
