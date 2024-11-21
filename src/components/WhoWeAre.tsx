import React, { useState } from 'react';
import { ChevronDown, Heart, Shield, Clock } from 'lucide-react';

interface ContentCardProps {
  title: string;
  content: string;
  initialContent: string;
  icon: React.ElementType;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, content, initialContent, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-teal-600" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-teal-800">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {isExpanded ? content : initialContent}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export const WhoWeAre = () => {
  const cards = [
    {
      icon: Heart,
      title: "Caregivers You Can Trust",
      content: "Feel better in the comfort of your own home with our trusted care and daily living assistance. As a leading NDIS service provider in Darwin, we cater to individuals with diverse needs. Whether you need daily or weekly support due to aging, illness, recovery, or rehabilitation, our caregivers offer personalized services you can trust.",
      initialContent: "Feel better in the comfort of your own home with our trusted care and daily living assistance. As a leading NDIS service provider in Darwin, we cater to individuals with diverse needs..."
    },
    {
      icon: Shield,
      title: "Experienced and Supportive",
      content: "We understand that not one care plan fits all. As a trusted NDIS service provider in Darwin, we offer daily services that can include anything from meal preparation, hygiene, cleaning, and supervision. Our team takes the time to get to know you and develop an individualized care plan that fits your specific needs. As a dedicated disability service provider, we ensure that all our care plans are tailored to meet your unique requirements.",
      initialContent: "We understand that not one care plan fits all. As a trusted NDIS service provider in Darwin, we offer daily services that can include anything from meal preparation, hygiene, cleaning, and supervision..."
    },
    {
      icon: Clock,
      title: "Experienced Home Health Aids",
      content: "Companionship is key to building a trusted relationship with our caregivers. As a dedicated NDIS service provider in Darwin, we not only strive to assist you with everyday tasks but also aim to develop a meaningful, caring relationship with you. Our one-on-one attention and care go beyond what other settings can offer. As a leading disability service provider, we ensure that our caregivers are not just skilled professionals but also compassionate individuals who truly care about your wellbeing.",
      initialContent: "Companionship is key to building a trusted relationship with our caregivers. As a dedicated NDIS service provider in Darwin, we not only strive to assist you with everyday tasks..."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-teal-800 leading-tight">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At LiveWell Care, we believe in transforming lives through compassionate care and unwavering support. Our mission is to empower individuals to live their best lives with dignity and independence.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            As a leading NDIS service provider in Darwin, we bring together experienced professionals who are passionate about making a positive difference in people's lives. Our approach combines clinical excellence with genuine care, ensuring that each person we serve receives the attention and support they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ContentCard
              key={index}
              title={card.title}
              content={card.content}
              initialContent={card.initialContent}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};