import React from 'react';
import { Shield, Heart, Users, Clock } from 'lucide-react';

export const NDISSection = () => {
  const features = [
    {
      icon: Shield,
      title: "NDIS Support",
      description: "We are a registered NDIS provider offering a comprehensive range of support services tailored to your needs."
    },
    {
      icon: Heart,
      title: "Person-Centered Care",
      description: "Our approach focuses on your individual goals, preferences, and aspirations to deliver personalized support."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced team of support workers and coordinators are trained to provide high-quality care services."
    },
    {
      icon: Clock,
      title: "Flexible Support",
      description: "We offer flexible support options to accommodate your schedule and specific requirements."
    }
  ];

  return (
    <section id="ndis" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-teal-800">What is NDIS?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            The National Disability Insurance Scheme (NDIS) provides support to eligible people with intellectual, physical, sensory, cognitive and psychosocial disability. As a  NDIS provider, we help participants achieve their goals and live more independently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-800">How We Can Help</h3>
              <p className="text-gray-600 mb-6">
                Our NDIS services are designed to support you in achieving your goals and living your best life. We work closely with you to understand your needs and create a personalized support plan.
              </p>
              <ul className="space-y-4">
                {[
                  "Support coordination and plan management",
                  "Daily living assistance",
                  "Community participation",
                  "Skill development and training",
                  "Allied health services",
                  "Transportation assistance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-3"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-800">Getting Started</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold mr-4 flex-shrink-0">
                      1
                    </span>
                    <p className="text-gray-600">Contact us to discuss your needs and NDIS plan</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold mr-4 flex-shrink-0">
                      2
                    </span>
                    <p className="text-gray-600">Meet with our team for an initial consultation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold mr-4 flex-shrink-0">
                      3
                    </span>
                    <p className="text-gray-600">Develop your personalized support plan</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-600 font-bold mr-4 flex-shrink-0">
                      4
                    </span>
                    <p className="text-gray-600">Begin receiving support services</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};