import React from 'react'
import LayOut from '../Layout/Layout'

function Event2() {
  return (
    <LayOut>
      <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">DevMeetup V2</h1>
          <p className="text-xl mb-8">The second edition brought even more energy and excitement!</p>
        </div>
      </section>
      {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
  <div className="container mx-auto px-6">
    {/* 🏆 1. Event Name (Main Heading) */}
    <h1 className="text-5xl font-bold mb-4">DevMeetup V2</h1>
    
    {/* ✨ 2. Short Event Description (Tagline) */}
    <p className="text-xl mb-4">The second edition brought even more energy and excitement!</p>
    
    {/* 📍 3. Event Location & Date (Positioned Below the Tagline) */}
    <p className="text-lg font-semibold mb-2">📍 Location: San Francisco, CA</p>
    <p className="text-lg font-semibold">📅 Date: March 15, 2025</p>
    
    {/* 🎟️ 4. CTA Button (Encourages Action) */}
    <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
      Get Your Ticket
    </button>
  </div>
</section>


      {/* Organizers Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Organizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://via.placeholder.com/150" alt="Organizer 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-700">Frontend Developer</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://via.placeholder.com/150" alt="Organizer 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Backend Developer</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="https://via.placeholder.com/150" alt="Sponsor 1" className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-700">Sponsor 1</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="https://via.placeholder.com/150" alt="Sponsor 2" className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-700">Sponsor 2</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="https://via.placeholder.com/150" alt="Sponsor 3" className="w-32 h-32 mx-auto mb-4" />
              <p className="text-gray-700">Sponsor 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Keynote by John Doe</h3>
            <p className="text-gray-700">A deep dive into modern JavaScript frameworks.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Workshop on React</h3>
            <p className="text-gray-700">Learn how to build scalable React applications.</p>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="https://via.placeholder.com/400x300" alt="Event Photo 1" className="rounded-lg" />
            <img src="https://via.placeholder.com/400x300" alt="Event Photo 2" className="rounded-lg" />
            <img src="https://via.placeholder.com/400x300" alt="Event Photo 3" className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
    </LayOut>
  )
}

export default Event2
