import React from 'react'
import LayOut from '../Layout/Layout'
import EventSections from '../PastEvent/EventSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';



import alx from "../Images/alx.jpeg"
import Cbe from "../Images/Cbe.avif"
import chappa from "../Images/chappa.avif"
import tele from "../Images/tele.avif"
import telebirr from "../Images/telebirr.avif"
import chappi from '../Images/chappi.avif';
import yeab from '../Images/yeabsra.avif';

function Event2() {
  return (
<LayOut hideFooter={true}>
      <div>
      {/* Hero Section */}
    
      {/* Hero Section */}
<section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
  <div className="container mx-auto px-6">
    {/* 🏆 1. Event Name (Main Heading) */}
    <h1 className="text-5xl font-bold mb-4">DevMeetup V2</h1>
    
    {/* ✨ 2. Short Event Description (Tagline) */}
    <p className="text-xl mb-4">The second edition brought even more energy and excitement!</p>
    
   
   
  </div>
</section>


    


      <section className="container mx-auto px-6 py-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-lg text-white">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Organizers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
                    <img src={chappi} alt="Organizer 1" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
                    <h3 className="text-xl font-bold mb-1">John Doe</h3>
                    <p className="text-gray-300">Frontend Developer</p>
                  </div>
                  <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
                    <img src={yeab} alt="Organizer 2" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
                    <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                    <p className="text-gray-300">Backend Developer</p>
                  </div>
                </div>
              </section>

      {/* Sponsors Section */}
  
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Sponsors</h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
            {[alx, chappa, Cbe, tele, telebirr].map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg text-center">
                  <img src={sponsor} alt={`Sponsor ${index + 1}`} className="w-32 h-32 mx-auto mb-4 rounded-lg" />
                  <p className="text-gray-300">Sponsor {index + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    
      
      <EventSections/>
    </div>
    </LayOut>
  )
}

export default Event2
