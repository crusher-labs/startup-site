import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background text-center text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Eclipse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;