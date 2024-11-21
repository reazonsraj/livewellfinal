import React from 'react';
import { ArrowRight, Heart, Clock, CheckCircle } from 'lucide-react';

const DailyLife = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&q=80"
            alt="Daily life assistance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Assistance With Daily Life
              </h1>
              <p className="text-xl text-teal-50">
                Making Daily Living Effortless!
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Supporting Your Independence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Assistance with Daily Life aims to support individuals in managing their everyday tasks and routines, promoting independence and self-sufficiency. Our dedicated team works alongside you to ensure you can live life to the fullest while maintaining your dignity and autonomy.
              </p>
              <div className="space-y-4">
                {[
                  "Personal care and hygiene support",
                  "Meal preparation and cooking assistance",
                  "Medication management",
                  "Household maintenance",
                  "Shopping and errands"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1732194438268-385836aa91c0?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Daily assistance"
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
                <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Support Process</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Listen & Plan</h3>
                    <p className="text-gray-600">We listen to your needs and create a comprehensive plan for daily tasks and routines that works for you.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Guide & Assist</h3>
                    <p className="text-gray-600">Our team provides gentle guidance and practical assistance as needed, ensuring you feel supported every step of the way.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Empower & Improve</h3>
                    <p className="text-gray-600">We empower you to learn and improve daily living skills at your own pace, celebrating every achievement along the way.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1501770118606-b1d640526693?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Support process"
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Regular Support & Check-ins</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Consistent Care</h3>
                  <p className="text-gray-600">We maintain regular check-ins to ensure your comfort and well-being in daily activities, adjusting our support as needed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Flexible Support</h3>
                  <p className="text-gray-600">Our support adapts to your changing needs and preferences, ensuring you always receive the right level of assistance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Progress Tracking</h3>
                  <p className="text-gray-600">We monitor your progress and celebrate achievements together, helping you build confidence in your daily activities.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1683208529938-8a7fb89c855f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Regular support"
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
              Get help with daily tasks like cooking, cleaning, and personal care, so you can live more independently.
            </p>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default DailyLife;