import React from "react";
import LayOut from "../Layout/Layout";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function EventSections() {
  return (
    <LayOut>
       {/* Event Venue & Highlights */}
       <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Venue</h2>
          <p className="text-lg">📍 Location: San Francisco, CA</p>
          <p className="text-lg">📅 Date: March 15, 2025</p>
          <p className="mt-4 text-gray-700">Join us at this amazing venue for an unforgettable experience!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
          <p className="text-lg">🎤 Keynote by John Doe - Modern JavaScript</p>
          <p className="text-lg">💻 React Workshop - Build Scalable Apps</p>
          <p className="text-lg">🎉 Networking & Fun Activities</p>
        </div>
      </section>

      {/* 🎉 Event Highlights */}
      {/* <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">🔥 Keynote Speech</h3>
            <p className="text-gray-700">Industry leaders discussing the future of tech.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">🚀 Workshops</h3>
            <p className="text-gray-700">Hands-on coding and networking sessions.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">🎙️ Panel Discussions</h3>
            <p className="text-gray-700">Experts debating on tech trends.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">🎊 After Party</h3>
            <p className="text-gray-700">Enjoy drinks and music with fellow developers!</p>
          </div>
        </div>
      </section> */}

      {/* 📸 Photo Gallery */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          <SwiperSlide>
            <div className="relative">
              <img src="https://source.unsplash.com/400x300/?tech" alt="Event Pic" className="rounded-lg" />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded">"Coding Fun!"</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://source.unsplash.com/400x300/?people" alt="Event Pic" className="rounded-lg" />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded">"Networking in Action!"</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src="https://source.unsplash.com/400x300/?conference" alt="Event Pic" className="rounded-lg" />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded">"Tech Talks!"</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}

<section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Event Photos & Fun Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative">
              <img src="https://via.placeholder.com/400x300" alt="Fun moment 1" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">🎉 Having a blast!</p>
            </div>
            <div className="relative">
              <img src="https://via.placeholder.com/400x300" alt="Fun moment 2" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">🎤 Amazing speakers!</p>
            </div>
            <div className="relative">
              <img src="https://via.placeholder.com/400x300" alt="Fun moment 3" className="rounded-lg shadow-lg hover:scale-105 transition" />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">💻 Hands-on coding sessions!</p>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default EventSections;
