import React from 'react';
import { ArrowRight, MapPin, Car, Train, Users } from 'lucide-react';

const Travel = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&q=80"
            alt="Travel and freedom"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Solution For All Your Transport Needs
              </h1>
              <p className="text-xl text-teal-50">
                We assist you in getting wherever you need to go with safe and reliable transportation options.
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Your Journey, Our Priority</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our Travel and Transport services provide safe, reliable transportation options to promote independence and mobility. We offer personalized support through a comprehensive approach that puts your needs first.
              </p>
              <div className="space-y-6">
                {[
                  "Understand your unique travel needs and preferences",
                  "Arrange safe, comfortable transport solutions",
                  "Provide travel training and guidance",
                  "Ensure reliable, convenient journeys"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 mt-3">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1676288176918-232f7caadfee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Transport solutions"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Transport Solutions Tailored To Your Needs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Transport Coordination",
                  description: "Comprehensive transport planning and coordination services to meet your specific needs."
                },
                {
                  icon: Users,
                  title: "Travel Assistance",
                  description: "Professional support for all your travel requirements, ensuring comfort and safety."
                },
                {
                  icon: Car,
                  title: "Accessible Transport",
                  description: "Specially equipped vehicles and transport options for all accessibility needs."
                },
                {
                  icon: Train,
                  title: "Public Transport Training",
                  description: "Guidance and support to help you navigate public transportation confidently."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Additional Support Services</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Vehicle Modifications</h3>
                  <p className="text-gray-600">Customized vehicle adaptations to meet your specific mobility requirements.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Community Transport Services</h3>
                  <p className="text-gray-600">Reliable transportation options to help you stay connected with your community.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Travel Support Workers</h3>
                  <p className="text-gray-600">Experienced professionals to assist you throughout your journey.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Travel Planning</h3>
                  <p className="text-gray-600">Comprehensive journey planning to ensure smooth and stress-free travel.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1732194439331-08ec61c4df4f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Additional services"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-12 text-teal-50 max-w-3xl mx-auto">
              Contact us today to learn more about our transport solutions and how we can help you achieve greater independence and mobility.
            </p>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default Travel;