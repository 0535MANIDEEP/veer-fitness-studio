import Link from 'next/link';
import { Dumbbell, Users, Clock, CheckCircle, Flame, HeartPulse } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Forge Your <span className="text-primary">Strength</span></h1>
          <p className={styles.subtitle}>
            The most serious fitness destination in Shankarpally. No gimmicks, just results.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">
              Visit The Gym
            </Link>
            <a href="https://wa.me/919030064239" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Why Veer Fitness */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Why Choose <span className="text-primary">Veer Fitness?</span></h2>
          </div>

          <div className="grid-3">
            <div className={styles.featureCard}>
              <Dumbbell className={styles.featureIcon} size={40} />
              <h3 className={styles.featureTitle}>Professional Equipment</h3>
              <p className={styles.featureText}>
                Heavy-duty machines and free weights designed for real strength training. Maintained daily for safety and performance.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Users className={styles.featureIcon} size={40} />
              <h3 className={styles.featureTitle}>Expert Guidance</h3>
              <p className={styles.featureText}>
                Led by Head Trainer <strong>Rajesh Goud</strong>. We focus on correcting your form, pushing your limits, and ensuring you train without injury.
              </p>
            </div>

            <div className={styles.featureCard}>
              <CheckCircle className={styles.featureIcon} size={40} />
              <h3 className={styles.featureTitle}>Disciplined Environment</h3>
              <p className={styles.featureText}>
                A clean, spacious, and focused atmosphere where everyone is here to work. No distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Our <span className="text-primary">Training</span></h2>
            <p className="text-secondary" style={{ marginTop: '10px' }}>Everything you need to reach your peak performance.</p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <Flame size={48} color="var(--primary-color)" />
              <h3 className={styles.serviceTitle}>Strength Training</h3>
              <p style={{ color: 'var(--text-muted)' }}>Dedicated zones for powerlifting, bodybuilding, and functional strength.</p>
            </div>

            <div className={styles.serviceCard}>
              <HeartPulse size={48} color="var(--primary-color)" />
              <h3 className={styles.serviceTitle}>Cardio & Endurance</h3>
              <p style={{ color: 'var(--text-muted)' }}>Modern treadmills, ellipticals, and cycles to build your stamina.</p>
            </div>

            <div className={styles.serviceCard}>
              <Users size={48} color="var(--primary-color)" />
              <h3 className={styles.serviceTitle}>Personal Training</h3>
              <p style={{ color: 'var(--text-muted)' }}>1-on-1 coaching customized to your specific body type and goals.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className={`section ${styles.pricing}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Membership <span className="text-primary">Plans</span></h2>
            <p className="text-secondary" style={{ marginTop: '10px' }}>Transparent pricing. No hidden fees.</p>
          </div>

          <div className={styles.pricingGrid}>
            {/* Strength Card */}
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>Strength</h3>
              <div className={styles.pricingPrice}>₹1,000</div>
              <div className={styles.pricingPeriod}>Monthly</div>

              <ul className={styles.pricingFeatureList}>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>3 Months</span>
                  <span className={styles.pricingValue}>₹2,600</span>
                </li>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>6 Months</span>
                  <span className={styles.pricingValue}>₹5,000</span>
                </li>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>12 Months</span>
                  <span className={styles.pricingValue}>₹8,000</span>
                </li>
              </ul>

              <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>
                Choose Plan
              </Link>
            </div>

            {/* Cardio & Strength Card */}
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>Cardio & Strength</h3>
              <div className={styles.pricingPrice}>₹1,500</div>
              <div className={styles.pricingPeriod}>Monthly</div>

              <ul className={styles.pricingFeatureList}>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>3 Months</span>
                  <span className={styles.pricingValue}>₹4,000</span>
                </li>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>6 Months</span>
                  <span className={styles.pricingValue}>₹7,000</span>
                </li>
                <li className={styles.pricingFeature}>
                  <span className={styles.pricingLabel}>12 Months</span>
                  <span className={styles.pricingValue}>₹10,000</span>
                </li>
              </ul>

              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Choose Plan
              </Link>
            </div>
          </div>

          <p style={{ marginTop: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            * Registration Charge: ₹200 for new memberships.
          </p>
        </div>
      </section>

      {/* Timings & Info */}
      <section className={`section ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Gym <span className="text-primary">Schedule</span></h2>
              <div className={styles.infoBox}>
                <div className={styles.infoRow}>
                  <span><Clock size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Monday - Saturday</span>
                  <span style={{ fontWeight: 700 }}>5:00 AM - 12:00 PM<br />4:00 PM - 9:30 PM</span>
                </div>
                <div className={styles.infoRow}>
                  <span><Clock size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Sunday</span>
                  <span style={{ fontWeight: 700 }}>5:00 AM - 12:00 PM</span>
                </div>
                <div style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  * Trainers available during all active hours.
                </div>
              </div>
            </div>

            <div>
              {/* Simple graphic placeholder for "Location" or an image */}
              <div className={styles.infoBox} style={{ textAlign: 'center', padding: '60px 40px' }}>
                <h3 style={{ marginBottom: '20px' }}>Ready to start?</h3>
                <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                  Pass by the studio today for a free tour and consultation.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>What <span className="text-primary">Locals Say</span></h2>

          <div className="grid-2">
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"I've been to many gyms in Shankarpally, but Veer Fitness is by far the best equipped. The vibe is serious and helps you focus."</p>
              <div className={styles.author}>- Rahul K.</div>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Clean, spacious, and the trainers actually pay attention to your form. Highly recommended for beginners."</p>
              <div className={styles.author}>- Sneha M.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Start Your Journey Today</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            No registration fees for a limited time. Walk in today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary">
              Join Now
            </Link>
            <a href="tel:+919030064239" className="btn btn-outline">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
