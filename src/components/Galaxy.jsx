import React from 'react';
import { motion } from 'framer-motion';

/**
 * Corona ring - the Eclipse motif (replaces the generic particle-galaxy canvas). A CSS
 * conic corona around a dark disc, slowly rotating. Kept the `Galaxy` export name so the
 * Hero import is unchanged.
 */
const Galaxy = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="relative grid place-items-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className="eclipse-ring h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]"
    />
    <div className="pointer-events-none absolute inset-0 grid place-items-center">
      <span className="font-display text-xs tracking-[0.3em] text-primary">
        ECLIPSE
      </span>
    </div>
  </motion.div>
);

export default Galaxy;
