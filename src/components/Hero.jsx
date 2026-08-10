import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Galaxy from '@/components/Galaxy';

/**
 * Hero - "Corona" identity. Mono display headline (dev-tool feel), coherent observability
 * copy (not the template's stray "biotechnology" text), amber accent, the corona ring.
 */
const Hero = ({ onScrollTo }) => (
  <section className="corona relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
    <div className="orbital-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="space-y-7"
      >
        <span className="font-display inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> DEPLOY &middot; OBSERVE &middot; SHIP
        </span>

        <h1 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          Ship code.<br />
          <span className="text-gradient">See everything.</span>
        </h1>

        <p className="max-w-md text-lg text-muted-foreground">
          Previews, logs, metrics, and incidents in one place. Eclipse watches your deploys so
          you can move fast without flying blind.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => onScrollTo('pricing')}
            size="lg"
            className="bg-primary text-primary-foreground transition hover:bg-primary/90"
          >
            Start free
          </Button>
          <Button
            onClick={() => onScrollTo('pricing')}
            size="lg"
            variant="outline"
            className="border-border text-foreground transition hover:bg-card"
          >
            View demo
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="flex items-center justify-center"
      >
        <Galaxy />
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  </section>
);

export default Hero;
