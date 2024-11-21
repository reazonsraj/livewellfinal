import React from 'react';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const ServicePage: React.FC<ServicePageProps> = ({ title, description, features, image }) => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-teal-50 max-w-2xl">{description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-teal-800 mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};