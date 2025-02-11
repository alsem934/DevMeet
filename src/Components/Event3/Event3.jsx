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
        <section >
          <div className="container mx-auto px-6">
          </div>
          <section className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="text-center p-6 md:p-12">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">Deev Meet Up 3!</h1>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">🚀 Coming Soon!</h1>
        <p className="text-lg md:text-2xl mb-6 opacity-90">Exciting things are on the way. Stay tuned!</p>
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-white rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
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



        <section className="bg-gray-100 py-16">
   

          {/* Floating Chat Button */}
          <Link to="/Chat" className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <div className="flex items-center">
      {/* Change the color using Tailwind CSS classes */}
      <FaRegCommentDots className="text-green-500" size={24} />
      <span className="ml-2">Your comment here</span>
    </div>
            
          </Link>
        </section>
      </div>
    </LayOut>
  )
}

export default Event3;
