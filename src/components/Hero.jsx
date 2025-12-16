import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Galaxy from '@/components/Galaxy';

const Hero = ({ onScrollTo }) => {
  const handleGetStarted = () => {
    onScrollTo('pricing');
  };

  const handleViewDemo = () => {
    onScrollTo('pricing');
  };

  return <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="space-y-8">
          <h1 className="text-[40px] md:text-6xl lg:text-7xl font-light leading-tight">
            <span className="text-gradient">Explore</span> the future
            <br />
            of biotechnology
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl">Discover the cutting-edge breakthroughs in science. All in one platform.</p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={handleGetStarted} size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-200">
              Get started
            </Button>
            <Button onClick={handleViewDemo} size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white transition-all duration-200">
              View demo
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.4
      }} className="flex justify-center items-center">
          <Galaxy />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>;
};
export default Hero;