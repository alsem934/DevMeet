



import React from 'react';

const PastEventsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* V1 Event Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="V1 Event" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">DevMeetup V1</h3>
              <p className="text-gray-700 mb-4">The first edition of DevMeetup was a huge success with over 200 attendees and 10 amazing talks.</p>
              <a href="/v1" className="text-blue-500 hover:underline">Learn More →</a>
            </div>
          </div>
          {/* V2 Event Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="V2 Event" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">DevMeetup V2</h3>
              <p className="text-gray-700 mb-4">The second edition brought even more energy with workshops, networking, and live coding sessions.</p>
              <a href="/v2" className="text-blue-500 hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;