import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = ({ onScrollTo }) => {
  const { toast } = useToast();

  const navItems = ['Features', 'Solutions', 'Pricing'];

  const handleNavClick = (item) => {
    const section = item.toLowerCase();
    if (section === 'features' || section === 'solutions' || section === 'pricing') {
      onScrollTo(section);
    } else {
      toast({
        title: "This functionality is not added yet, but you can add it with your next prompts ❤️",
      });
    }
  };

  const handleSignIn = () => {
    toast({
      title: "This functionality is not added yet, but you can add it with your next prompts ❤️",
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-r from-background to-card/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
          <span className="text-xl font-light">Eclipse</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-muted-foreground hover:text-white transition-colors duration-200 text-sm"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleSignIn}
            variant="outline"
            className="border-white/10 hover:bg-card text-white"
          >
            Sign in
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;