import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">LiveWell Care</h2>
          <p className="mb-6">Providing exceptional care services since 2024</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            © 2024 LiveWell Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};