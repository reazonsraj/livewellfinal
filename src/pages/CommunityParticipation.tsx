import React from 'react';
import { ArrowRight } from 'lucide-react';

const CommunityParticipation = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1732194438700-c7eb8cc16cb6?q=80&w=3540&auto=format&fit=crop"
            alt="Community participation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Empowering Active Community Involvement
              </h1>
              <p className="text-xl text-teal-50">
                Assistance with Innovative Community Participation in Darwin,
                Palmerston and Casuarina
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Building Meaningful Connections
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                If you are an NDIS participant, the Innovative Community
                Participation program is designed to help you build essential
                skills for active involvement in your community. If you have
                funding for this program, reach out to Live Well today.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a trusted disability services and support organisation, Live
                Well provides expert assistance with community engagement across
                Darwin, Palmerston and Casuarina. Our experienced support
                workers are here to guide you through developing skills and
                finding opportunities.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1732194438700-c7eb8cc16cb6?q=80&w=3540&auto=format&fit=crop"
                alt="Community support"
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
                <h2 className="text-3xl font-bold text-teal-800 mb-6">
                  Developing Essential Skills
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">
                      Self-Care Awareness
                    </h3>
                    <p className="text-gray-600">
                      We help participants enhance their self-care skills,
                      fostering independence and well-being through personalized
                      guidance and support.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">
                      Social Skills Development
                    </h3>
                    <p className="text-gray-600">
                      Our approach focuses on enhancing social abilities,
                      enabling participants to engage comfortably and
                      confidently with others.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">
                      Employment Preparation
                    </h3>
                    <p className="text-gray-600">
                      Through practical workshops and one-on-one coaching, we
                      help build the confidence needed for successful job
                      interviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&q=80"
                  alt="Skill development"
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">
                Our Commitment to You
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">
                    Personalised Support
                  </h3>
                  <p className="text-gray-600">
                    We provide tailored services to meet the unique needs of
                    each participant, ensuring a truly personalized experience
                    that aligns with your goals and aspirations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">
                    Cultural Sensitivity
                  </h3>
                  <p className="text-gray-600">
                    Our approach honours and respects the personal values of
                    those we assist, ensuring compassionate and culturally
                    sensitive support at every step.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600">
                    Regular feedback and progress tracking ensure our support
                    remains aligned with your personal goals and aspirations as
                    you grow and develop.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&q=80"
                alt="Personalized support"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-12 text-teal-50 max-w-3xl mx-auto">
              Whether you're a participant or a family member seeking
              personalised support, Live Well is here to help you every step of
              the way.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityParticipation;