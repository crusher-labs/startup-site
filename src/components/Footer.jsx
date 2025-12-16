import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#08001a] text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} Eclipse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;