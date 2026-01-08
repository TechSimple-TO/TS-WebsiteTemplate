/**
 * About.tsx
 * Expanded "About" page for the template.
 * Uses CSS Modules for scoped styling and a small fade-in animation.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import placeholderImage from '../assets/placeholder-image.svg';

const About: React.FC = () => (
  // Wrapper applies spacing + fade-in animation
  <section className={styles.wrapper}>
    {/* Page title */}
    <div className={styles.introBox}>
      <h2 className={styles.title}>About Your Brand</h2>

      {/* Lead paragraph: quick, friendly summary */}
      <p className={styles.lead}>
        Use this space to share a short, human introduction to your business. Explain what you do,
        who you help, and what makes your approach different.
      </p>
    </div>

    {/* Photo just below the About section */}
    <img
      className={styles.aboutImg}
      src={placeholderImage}
      alt="Placeholder"
      loading="lazy"
    />

    {/* Content is organized into small, scannable sections for readability */}
    
      {/* Mission / What we do */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Our Mission</h3>
        <p>
          Write a short mission statement that sets the tone for your brand and the outcomes you
          want to deliver.
        </p>
      </article>

      {/* Services snapshot (lightweight—your full Services page does the deep dive) */}
    <div className={styles.cardGrid}>
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>What We Offer</h3>
        <ul className={styles.list}>
          <li>Primary service or product line</li>
          <li>Secondary service or package</li>
          <li>Optional add-on or support offering</li>
          <li>Specialty or niche capability</li>
        </ul>
        <p className={styles.note}>
          See the <Link to="/services">Services</Link> page for details.
        </p>
      </article>

      {/* Values / How we work */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>How We Work</h3>
        <ul className={styles.list}>
          <li><strong>Clear scope:</strong> share expectations up front.</li>
          <li><strong>Reliable delivery:</strong> keep timelines visible.</li>
          <li><strong>Flexible support:</strong> adapt to changing needs.</li>
          <li><strong>Honest pricing:</strong> explain costs early.</li>
        </ul>
      </article>

      {/* Credentials / Testimonials nudge */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Why Choose Us</h3>
        <p>
          Add a short proof point such as a result, certification, or small metric that
          builds credibility.
        </p>
        <p className={styles.note}>
          Browse a few <Link to="/">testimonials</Link> on the home page.
        </p>
      </article>
    </div>

      {/* Service area / Contact CTA */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Where We Work</h3>
        <p>
          List your location, remote availability, and any travel or service area details.
        </p>
        <div className={styles.ctaRow}>
          <Link className="btn btn--primary" to="/contact">Get in Touch</Link>
        </div>
      </article>
  </section>
);

export default About;
