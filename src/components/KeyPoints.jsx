import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gauge, ScrollText, GitBranch } from 'lucide-react';

// Honest, on-brand feature copy (observability/deploy) - replaces the template's stray
// "biotechnology" text and Hostinger stock illustrations. The visual is a motif panel, not
// a fake screenshot.
const keyPointsData = [
  {
    icon: Gauge,
    title: 'Real-time metrics',
    description:
      'Latency, error rate, throughput, and saturation, streamed live from every region. Dashboards that load before your coffee gets cold.',
    code: 'p99_latency = 84ms',
  },
  {
    icon: ScrollText,
    title: 'Structured logs',
    description:
      'Search billions of log lines in milliseconds. Filter by request, user, or deploy, and jump from a spike straight to the offending line.',
    code: 'level=error deploy=9f3a',
  },
  {
    icon: GitBranch,
    title: 'Deploy tracking',
    description:
      'Every release is tagged to its commit. When a metric moves, Eclipse tells you which PR caused it, before the on-call pager does.',
    code: 'deploy 9f3a2c → +12% err',
  },
];

const Panel = ({ point }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const Icon = point.icon;
  return (
    <div ref={ref} className="orbital-grid relative h-72 w-full max-w-md overflow-hidden rounded-xl border border-border bg-card p-5 shadow-2xl">
      <motion.div style={{ y }} className="relative flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-background/80 p-3">
          <code className="font-display text-sm text-primary">{point.code}</code>
        </div>
      </motion.div>
    </div>
  );
};

const KeyPoints = () => {
  const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 1.2 } },
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-8">
        {keyPointsData.map((point, index) => (
          <motion.div
            key={point.title}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          >
            <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">{point.title}</h2>
              <p className="max-w-lg text-lg text-muted-foreground">{point.description}</p>
            </div>
            <div className="flex items-center justify-center">
              <Panel point={point} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyPoints;
