



import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to DevMeetup!</h1>
        <p className="text-xl mb-8">Connecting Developers, Building Communities.</p>
        <div className="space-x-4">
          <a href="/v1" className="bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-gray-100">Explore Past Events</a>
          <a href="/v3" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-500">Join V3</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;