import React from 'react';
import { ArrowRight, Users, Music, Palette, MapPin } from 'lucide-react';

const Social = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&q=80"
            alt="Social activities"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Social Activities Assistance
              </h1>
              <p className="text-xl text-teal-50">
                Empowering social connections in Darwin, Palmerston, Tiwi, and Casuarina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-24 py-24">
        {/* Section 1 */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Supporting Your Social Journey</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Live Well, we provide step-by-step assistance to help participants engage in a variety of social and civic activities. Our goal is to promote health and well-being by making these activities more accessible, even for those facing physical challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that participating in social and civic activities can be difficult when dealing with impairments. That's why our dedicated support workers will assess your individual needs and create tailored support plans to help you achieve your goals.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social support"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Activities We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Social Events",
                  activities: [
                    "Sports participation",
                    "Shows and expos",
                    "Social group meetings",
                    "Community events"
                  ]
                },
                {
                  icon: Palette,
                  title: "Cultural Activities",
                  activities: [
                    "Museums visits",
                    "Art galleries",
                    "Art classes",
                    "Local performances"
                  ]
                },
                {
                  icon: MapPin,
                  title: "Outdoor Activities",
                  activities: [
                    "Parks and gardens",
                    "Beach visits",
                    "Market trips",
                    "Community outings"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-gray-600">
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
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Commitment to You</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Personalized Support</h3>
                  <p className="text-gray-600">From planning to participation, our professionals are with you every step of the way, ensuring you feel supported and empowered.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Consistent Care</h3>
                  <p className="text-gray-600">You can rely on us for consistent, high-quality care and assistance designed to meet your unique needs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Goal Achievement</h3>
                  <p className="text-gray-600">With Live Well, reaching your personal goals becomes more manageable through our comprehensive support system.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1478695605156-f64b0ee877f4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our commitment"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-12 text-teal-50 max-w-3xl mx-auto">
              Connect with us today to learn more about our social activities support and how we can help you engage with your community.
            </p>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Social;