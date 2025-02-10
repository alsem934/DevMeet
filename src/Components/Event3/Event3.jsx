import React from 'react'
import LayOut from '../Layout/Layout'
import { Link } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import LiveUpdates from '../LiveUpdates';  

function Event3() {
  return (
    <LayOut>
      <div>
        <Link to="/Chat"><FaRegCommentDots /></Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">DevMeetup V3</h1>
            <p className="text-xl mb-8">Join us for the next big developer event!</p>
          </div>
        </section>

        {/* Live Updates Section (Added Here) */}
        <section className="container mx-auto px-6 py-16">
  <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-4xl font-extrabold text-center mb-6">📢 Live Updates</h2>
    <p className="text-center text-lg mb-4 opacity-90">Stay updated with real-time event news!</p>
    
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md max-h-96 overflow-y-auto">
      <LiveUpdates />
    </div>
  </div>
</section>



        {/* Organizers Section */}
        {/* <section className="container mx-auto px-6 py-16">
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
        </section> */}

        {/* Sponsors Section */}
        {/* <section className="bg-gray-100 py-16">
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
        </section> */}

        {/* Highlights Section */}
        {/* <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Keynote by Jane Smith</h3>
              <p className="text-gray-700">An inspiring talk about the future of web development.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Workshop on Tailwind CSS</h3>
              <p className="text-gray-700">Hands-on session to master modern CSS frameworks.</p>
            </div>
          </div>
        </section> */}

        {/* Photos Section */}
        <section className="bg-gray-100 py-16">
          {/* <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src="https://via.placeholder.com/400x300" alt="Event Photo 1" className="rounded-lg" />
              <img src="https://via.placeholder.com/400x300" alt="Event Photo 2" className="rounded-lg" />
              <img src="https://via.placeholder.com/400x300" alt="Event Photo 3" className="rounded-lg" />
            </div>
          </div> */}

          {/* Floating Chat Button */}
          <Link to="/Chat" className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
            <FaRegCommentDots size={24} />
          </Link>
        </section>
      </div>
    </LayOut>
  )
}

export default Event3;
