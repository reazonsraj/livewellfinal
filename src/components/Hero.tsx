import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(13, 148, 136, 0.9), rgba(59, 130, 246, 0.9))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Transforming Lives Through Compassionate Care
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
            Professional and dedicated healthcare services tailored to your needs. Experience the difference with our personalized approach to care.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to top, white, transparent)'
        }}
      />
    </div>
  );
};