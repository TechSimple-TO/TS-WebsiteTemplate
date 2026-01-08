/**
 * Home.tsx
 * Landing page: brief intro + testimonial highlights.
 * Notes:
 * - Styles are scoped via Home.module.scss for consistency.
 * - Keep this page lightweight; deeper details live on Services/About.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

import placeholderImage from '../assets/placeholder-image.svg';

/** Stronger typing helps prevent accidental shape changes later. */
type Testimonial = { name: string; quote: string };

const testimonials: Testimonial[] = [
  {
    name: 'Client One',
    quote:
      'This is a sample testimonial. Swap this with a short, specific quote that highlights a real result.',
  },
  {
    name: 'Client Two',
    quote:
      'Use these quotes to build trust. Keep them concise and focused on outcomes.',
  },
  {
    name: 'Client Three',
    quote:
      'Another placeholder quote goes here. Replace with real feedback once available.',
  },
];

// Helper: truncate a string to N words (adds an ellipsis when truncated)
const truncateWords = (text: string, count: number) => {
  const words = text.trim().split(/\s+/);
  return words.length <= count ? text : words.slice(0, count).join(' ') + '…';
};

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openReview = (t: Testimonial) => {
    setActiveTestimonial(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTestimonial(null);
  };

  useEffect(() => {
    if (!modalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [modalOpen]);

  return (
  <>
    {/* Intro: simple welcome block in a card-style wrapper */}
    <section className={styles.wrapper} aria-labelledby="home-title">
      <div className={styles.intro}>
        <h2 id="home-title" className={styles.title}>
          Welcome to Your Website
        </h2>
        <p className={styles.lead}>
          This hero section is a short introduction. Replace it with a clear, one-sentence summary
          of what your business does and who it helps.
        </p>
      </div>
    </section>

    {/* Palette guidance */}
    <section className={styles.section} aria-labelledby="palette-title">
      <div className={styles.card}>
        <h2 id="palette-title" className={styles.sectionTitle}>Choose Your Color Palette</h2>
        <p className={styles.sectionLead}>
          Pick 4 core colors to keep the site consistent. Add an optional highlight color if you
          want a bit more contrast.
        </p>
        <ul className={styles.paletteGrid} role="list">
          <li className={styles.paletteCard}>
            <span className={`${styles.swatch} ${styles.swatchPrimary}`} aria-hidden="true" />
            <h3 className={styles.cardHeading}>Primary accent</h3>
            <p>Primary buttons, key headings, and the active navigation state.</p>
          </li>
          <li className={styles.paletteCard}>
            <span className={`${styles.swatch} ${styles.swatchSecondary}`} aria-hidden="true" />
            <h3 className={styles.cardHeading}>Secondary accent</h3>
            <p>Secondary buttons, borders, dividers, and subtle emphasis.</p>
          </li>
          <li className={styles.paletteCard}>
            <span className={`${styles.swatch} ${styles.swatchLight}`} aria-hidden="true" />
            <h3 className={styles.cardHeading}>Light neutral</h3>
            <p>Page background, card surfaces, and low-contrast panels.</p>
          </li>
          <li className={styles.paletteCard}>
            <span className={`${styles.swatch} ${styles.swatchDark}`} aria-hidden="true" />
            <h3 className={styles.cardHeading}>Dark neutral</h3>
            <p>Body text, icons, and any high-contrast dividers.</p>
          </li>
          <li className={styles.paletteCard}>
            <span className={`${styles.swatch} ${styles.swatchAccent}`} aria-hidden="true" />
            <h3 className={styles.cardHeading}>Optional highlight</h3>
            <p>Badges, callouts, and small UI flourishes.</p>
          </li>
        </ul>
        <p className={styles.paletteNote}>
          This template ships with grayscale values so you can swap in your own palette quickly.
        </p>
        <div className={styles.paletteExample} role="group" aria-label="Example components using four brand colors">
          <div className={styles.exampleSwatches}>
            <div>
              <span className={`${styles.swatch} ${styles.exampleSwatch} ${styles.examplePrimarySwatch}`} aria-hidden="true" />
              <p className={styles.exampleLabel}>Primary accent</p>
            </div>
            <div>
              <span className={`${styles.swatch} ${styles.exampleSwatch} ${styles.exampleSecondarySwatch}`} aria-hidden="true" />
              <p className={styles.exampleLabel}>Secondary accent</p>
            </div>
            <div>
              <span className={`${styles.swatch} ${styles.exampleSwatch} ${styles.exampleLightSwatch}`} aria-hidden="true" />
              <p className={styles.exampleLabel}>Light neutral</p>
            </div>
            <div>
              <span className={`${styles.swatch} ${styles.exampleSwatch} ${styles.exampleDarkSwatch}`} aria-hidden="true" />
              <p className={styles.exampleLabel}>Dark neutral</p>
            </div>
          </div>
          <div className={styles.exampleCard}>
            <div className={styles.exampleHeader}>
              <span className={styles.exampleBadge}>Highlight badge</span>
              <span className={styles.exampleLink}>Example link</span>
            </div>
            <h3 className={styles.exampleTitle}>Example card title</h3>
            <p className={styles.exampleBody}>
              This mock card shows how four brand colors can map to buttons, badges, text, and
              background surfaces.
            </p>
            <div className={styles.exampleActions}>
              <button className={styles.examplePrimary} type="button">Primary action</button>
              <button className={styles.exampleSecondary} type="button">Secondary action</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services snapshot: 3–4 cards linking to the Services page */}
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.card}>
        <h2 id="services-title" className={styles.sectionTitle}>What We Do</h2>
        <p className={styles.sectionLead}>
          This section lists your core services. Keep it brief and scannable.
        </p>
      

        <ul className={styles.cardGrid} role="list">
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category One</h3>
            <p>Short description of a key offering. Focus on outcomes, not features.</p>
          </li>
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category Two</h3>
            <p>Describe a second service. Keep the language straightforward and friendly.</p>
          </li>
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category Three</h3>
            <p>One sentence explaining who this is for and why it matters.</p>
          </li>
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category Four</h3>
            <p>Add another offering or remove cards you do not need.</p>
          </li>
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category Five</h3>
            <p>Use this space to highlight a differentiator or specialty.</p>
          </li>
          <li className={styles.card}>
            <img className={styles.cardImg} src={placeholderImage} alt="Service placeholder" loading="lazy" decoding="async" />
            <h3 className={styles.cardHeading}>Service Category Six</h3>
            <p>Swap in a real service or delete this card for a shorter list.</p>
          </li>
        </ul>
        <div className={styles.sectionCtaRow} style={{ justifyContent: 'center' }}>
          <Link className="btn btn--primary" to="/services">View Services</Link>
        </div>
      </div>
    </section>

     {/* Process: 3 simple steps */}
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.card}>
        <h2 id="process-title" className={styles.sectionTitle}>How It Works</h2>
        <ol className={styles.steps} aria-label="Our three-step process">
          <li className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <div>
              <h3 className={styles.stepTitle}>Discover</h3>
              <p>Share your goals, timeline, and constraints so we can scope the work.</p>
            </div>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <div>
              <h3 className={styles.stepTitle}>Design</h3>
              <p>We outline the plan, deliverables, and milestones for approval.</p>
            </div>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <div>
              <h3 className={styles.stepTitle}>Deliver</h3>
              <p>We execute the work and provide any follow-up support you need.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    {/* CTA band: high-contrast nudge before testimonials */}
    <section className={styles.ctaBand} aria-labelledby="cta-title">
      <div className={styles.ctaBandInner}>
        <h2 className={styles.h2w} id="cta-title">Ready to get started?</h2>
        <div className={styles.sectionCtaRow}>
          <Link className="btn btn--secondary" to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>

    {/* Testimonials: semantic list for improved screen reader navigation */}
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className={styles.card}>
        <h2 id="testimonials-title">Testimonials</h2>
        <p>Add a few short testimonials to build credibility and social proof.</p>
      

        <ul className={styles.cardGrid}>
          {testimonials.map((t, i) => (
            <li className={styles.card} key={t.name}>
              <p className={styles.stars} aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className={styles.quote}>
                <p id={`quote-${i}`}>&ldquo;{truncateWords(t.quote, 12)}&rdquo;</p>
              </blockquote>
              <footer className={styles.name}>— {t.name}</footer>
              <button
                type="button"
                className="btn btn--primary"
                aria-haspopup="dialog"
                aria-controls="review-dialog"
                onClick={() => openReview(t)}
              >
                Read full review
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
    {modalOpen && activeTestimonial && (
      <div className={styles.modalOverlay} role="presentation" onClick={closeModal}>
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-title"
          aria-describedby="review-body"
          id="review-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle} id="review-title">Review from {activeTestimonial.name}</h3>
          <blockquote className={styles.quote}>
            <p id="review-body">“{activeTestimonial.quote}”</p>
          </blockquote>
          <div className={styles.modalActions}>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={closeModal}
              ref={closeBtnRef}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Home;
