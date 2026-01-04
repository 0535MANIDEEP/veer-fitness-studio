import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
    title: 'About Us | Veer Fitness Studio',
    description: 'Learn about our mission to bring serious fitness to Shankarpally.',
};

export default function About() {
    return (
        <main>
            <Navbar />

            {/* Page Header */}
            <section style={{
                padding: '120px 0 60px',
                backgroundColor: 'var(--surface-color)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our <span className="text-primary">Story</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Built for those who refuse to settle for average.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why We Started</h2>
                            <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                Veer Fitness Studio was founded to fill a gap in Shankarpally. We saw a need for a professional training facility that prioritized equipment quality and hygiene without the inflated price tags of luxury clubs.
                            </p>
                            <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                Owned and led by <strong>Rajesh Goud Tatikonda</strong>, we are a local business built by trainers, for those who want real results. We train right here alongside you.
                            </p>
                        </div>

                        <div style={{
                            position: 'relative',
                            height: '400px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)'
                        }}>
                            <Image
                                src="/about-gym.png"
                                alt="Veer Fitness Studio Interior"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>Our <span className="text-primary">Philosophy</span></h2>

                    <div className="grid-3">
                        <div style={{ padding: '30px', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--primary-color)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Consistency</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Motivation gets you started. Habit keeps you going. We are here to help you build that habit.</p>
                        </div>

                        <div style={{ padding: '30px', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--primary-color)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Discipline</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>We implement strict rules on hygiene and equipment usage to ensure a respectful environment for everyone.</p>
                        </div>

                        <div style={{ padding: '30px', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--primary-color)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Progress</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>It's not about being the strongest in the room. It's about being stronger than you were yesterday.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
