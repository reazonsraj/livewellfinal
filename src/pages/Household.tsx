import React from 'react';
import { ArrowRight, Home, Sparkles, Book, Star } from 'lucide-react';

const Household = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&q=80"
            alt="Household tasks"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Household Tasks Made Easy
              </h1>
              <p className="text-xl text-teal-50">
                Supporting independence and improving quality of life through personalized household assistance
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Approach to Household Support</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Live Well, we are dedicated to supporting participants with household tasks to promote independence and improve quality of life. As a trusted disability services and support organisation, our goal is to help participants build the skills they need to manage household tasks effectively.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We start by assessing the challenges you may be facing due to physical impairments. From there, we develop a personalised support plan tailored to your needs. Our experienced team works closely with you to implement this plan, helping you gain the skills and confidence required to manage daily tasks independently.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&q=80"
                alt="Household support"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Home Maintenance",
                  items: ["Home Cleaning", "Dusting", "Making the Bed", "Washing Dishes"]
                },
                {
                  title: "Laundry Services",
                  items: ["Laundry", "Ironing", "Folding", "Organization"]
                },
                {
                  title: "Additional Support",
                  items: ["Gardening", "Meal Preparation", "Creating Grocery Lists", "Scheduling Appointments"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
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
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Experienced Support Workers</h3>
                  <p className="text-gray-600">Our team is skilled in assisting with a wide range of household tasks, ensuring professional and reliable support.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Skill Development</h3>
                  <p className="text-gray-600">We focus on helping participants build essential skills for managing everyday activities independently.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Personalized Support</h3>
                  <p className="text-gray-600">Our support is tailored to meet individual needs while maintaining the highest standards of privacy and dignity.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=3563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Why choose us"
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
              Contact us today to learn more about our household task support services and how we can help you achieve greater independence.
            </p>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default Household;