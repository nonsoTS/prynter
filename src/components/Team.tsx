import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Lucas Harris",
      role: "Lead AI Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    },
    {
      name: "Lucas Harris",
      role: "Lead AI Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
    },
    {
      name: "Lucas Harris",
      role: "Lead AI Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
    },
    {
      name: "Lucas Harris",
      role: "Lead AI Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Our Team</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900">Meet our team</h1>
          </div>
          <div className="text-right max-w-md mt-8">
            <p className="text-gray-600">
              Skilled experts, not a generic team, we craft tailored AI systems that drive success.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <button className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}