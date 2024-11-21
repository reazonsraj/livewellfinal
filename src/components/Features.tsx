import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Our team provides heartfelt care with understanding and empathy for every individual.'
    },
    {
      icon: Shield,
      title: 'Professional Service',
      description: 'Experienced healthcare professionals dedicated to your wellbeing and safety.'
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Tailored care plans that meet your unique needs and preferences.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};