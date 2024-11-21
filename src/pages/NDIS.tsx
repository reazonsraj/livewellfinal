import React from 'react';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

const NDIS = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&q=80"
            alt="NDIS Support"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Understanding NDIS
              </h1>
              <p className="text-xl text-teal-50">
                Your Guide to the National Disability Insurance Scheme - Supporting Australians with Disability
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">What is NDIS?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The National Disability Insurance Scheme (NDIS) is Australia's national scheme for people with disability. It provides funding directly to individuals with permanent and significant disability, enabling them to access the supports they need to achieve their goals and live an ordinary life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The NDIS takes a lifetime approach, investing in people with disability early to improve their outcomes later in life. It provides participants with more choice and control over how, when, and where their supports are provided.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&q=80"
                alt="NDIS Support"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-teal-800 mb-6">Who Can Access NDIS?</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Age Requirements</h3>
                    <p className="text-gray-600">You must be under 65 years of age when you first apply to access the NDIS and meet residency requirements.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Disability Requirements</h3>
                    <p className="text-gray-600">Your disability must be permanent and significant, affecting your ability to take part in everyday activities.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Early Intervention</h3>
                    <p className="text-gray-600">You may also qualify if you require early intervention supports to reduce the impact of your disability over time.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&q=80"
                  alt="NDIS Eligibility"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">What Does NDIS Cover?</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Daily Living Supports</h3>
                  <p className="text-gray-600">Assistance with daily personal activities, household tasks, and community participation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Capacity Building</h3>
                  <p className="text-gray-600">Support to build your independence and skills, including therapy services and employment support.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Capital Support</h3>
                  <p className="text-gray-600">Funding for assistive technologies, equipment, home or vehicle modifications, and specialist disability accommodation.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&q=80"
                alt="NDIS Support Services"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Start Your NDIS Journey?</h2>
            <p className="text-xl mb-12 text-teal-50 max-w-3xl mx-auto">
              Let us help you navigate the NDIS and access the support you need. Contact us today to learn more about how we can assist you.
            </p>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default NDIS;