/**
 * Services.tsx
 * Full services overview page.
 * - Intro block with title/lead
 * - Image-backed service cards in a responsive grid
 * - “Why work with us” bullets
 * - CTA band to contact
 * Uses CSS Modules for scoped styles.
 */

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';

// Import images (Vite will optimize/hash these)
import placeholderImage from '../assets/placeholder-image.svg';

type Service = {
  title: string;
  description: string;
  img: string;
  details: string;
  examples: string[];
};

const services: Service[] = [
  {
    title: 'Service Category One',
    description:
      'Short summary of your first service. Focus on what clients achieve after working with you.',
    img: placeholderImage,
    details:
      'Use this expanded panel to add more detail, scope, and typical outcomes for this service.',
    examples: [
      'Example deliverable or result',
      'Suggested timeline or engagement format',
      'Tools, platforms, or materials involved',
      'Optional add-ons or related services',
    ],
  },
  {
    title: 'Service Category Two',
    description:
      'A clear, specific description for the second service you provide.',
    img: placeholderImage,
    details:
      'Add more context here, including who this service is best for and typical results.',
    examples: [
      'Common pain point you solve',
      'Typical deliverable',
      'Optional maintenance or retainer',
      'Follow-up support or handoff',
    ],
  },
  {
    title: 'Service Category Three',
    description:
      'One or two lines that explain the value of this offering.',
    img: placeholderImage,
    details:
      'Use this space for deeper detail, scope boundaries, and any assumptions.',
    examples: [
      'Setup and discovery',
      'Execution and delivery',
      'Documentation or training',
      'Post-launch check-in',
    ],
  },
  {
    title: 'Service Category Four',
    description:
      'Describe this service in plain language and define the main outcome.',
    img: placeholderImage,
    details:
      'Explain how you deliver this service and what clients can expect.',
    examples: [
      'Kickoff and requirements',
      'Design or build phase',
      'Delivery timeline',
      'Optional support plan',
    ],
  },
  {
    title: 'Service Category Five',
    description:
      'Summarize this service in one sentence that speaks to the client.',
    img: placeholderImage,
    details:
      'Use the details panel to add scope and deliverables for this service.',
    examples: [
      'Key deliverable one',
      'Key deliverable two',
      'Stakeholder handoff',
      'Maintenance or ongoing support',
    ],
  },
  {
    title: 'Service Category Six',
    description:
      'Add a final service or remove this card if you need fewer offerings.',
    img: placeholderImage,
    details:
      'Optional detail paragraph describing what is included or excluded.',
    examples: [
      'Example bullet point',
      'Example bullet point',
      'Example bullet point',
      'Example bullet point',
    ],
  },
];

const Services: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (title: string) => setExpanded((t) => (t === title ? null : title));
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expanded && panelRef.current) {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      panelRef.current.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }, [expanded]);

  return (
  <section className={styles.wrapper} aria-labelledby="services-title">
    {/* Intro */}
    <div className={styles.intro}>
      <h2 id="services-title" className={styles.title}>Our Services</h2>
      <p className={styles.lead}>
        Use this page to describe each service in more detail. Keep descriptions concise and
        focus on outcomes.
      </p>
    </div>

    {/* Services grid */}
    <ul className={styles.cardGrid} role="list">
      {services.map((s) => {
        const isExpanded = expanded === s.title;
        const panelId = 'svc-expanded-panel';
        return (
          <li className={styles.card} key={s.title}>
            <img className={styles.cardImg} src={s.img} alt={s.title} loading="lazy" />
            <h3 className={styles.cardHeading}>{s.title}</h3>
            <p>{s.description}</p>
            <div className={styles.cardActions}>
              <button
                type="button"
                className={`btn ${isExpanded ? 'btn--primary' : 'btn--primary'}`}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggle(s.title)}
              >
                {isExpanded ? 'Hide Details' : 'Learn More'}
              </button>
            </div>
          </li>
        );
      })}
    </ul>

    {expanded && (() => {
      const svc = services.find((x) => x.title === expanded)!;
      return (
        <div
          id="svc-expanded-panel"
          className={styles.expandedPanel}
          aria-live="polite"
          ref={panelRef}
        >
          <img className={styles.expandedImg} src={svc.img} alt={svc.title} />
          <h3 className={styles.cardHeading}>{svc.title}</h3>
          <p>{svc.details || svc.description}</p>
          {svc.examples?.length ? (
            <ul className={styles.examples} aria-label="Examples">
              {svc.examples.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    })()}

    {/* Why work with us */}
    <div className={styles.whyBox} aria-labelledby="why-title">
      <h3 id="why-title" className={styles.whyTitle}>Why Work With Us</h3>
      <ul className={styles.bullets}>
        <li><strong>Clear scope:</strong> define deliverables and expectations up front.</li>
        <li><strong>Reliable timelines:</strong> set milestones and keep stakeholders informed.</li>
        <li><strong>Flexible options:</strong> choose the level of support that fits your needs.</li>
        <li><strong>Transparent pricing:</strong> explain costs before work begins.</li>
      </ul>
    </div>

    {/* CTA band */}
    <section className={styles.ctaBand} aria-labelledby="services-cta">
      <div className={styles.ctaBandInner}>
        <h2 id="services-cta" className={styles.h2w}>Not sure where to start?</h2>
        <p className={styles.hintw}>Reach out and describe your goals so we can suggest next steps.</p>
        <div className={styles.sectionCtaRow}>
          <Link className="btn btn--secondary" to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  </section>
  );
};

export default Services;
