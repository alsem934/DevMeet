import React from 'react';
import LayOut from '../Layout/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import EventSections from '../PastEvent/EventSection';
import { Autoplay } from 'swiper/modules';

import alx from '../Images/alx.jpeg';
import chappa from '../Images/chappa.avif';
import cbe from '../Images/Cbe.avif';
import tele from '../Images/tele.avif';
import telebirr from '../Images/telebirr.avif';
import chappi from '../Images/chappi.avif';
import yeab from '../Images/yeabsra.avif';

function Event1() {
  return (
    <LayOut hideFooter={true}>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">DevMeetup V1</h1>
            <p className="text-xl mb-8">The First brought  energy and excitement!</p>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="w-full container mx-auto px-6 py-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-lg text-white ">
  <h2 className="text-3xl font-bold text-center mb-12">Meet Our Organizers</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
      <img src={chappi} alt="Organizer 1" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
      <h3 className="text-xl font-bold mb-1 text-black">Temkin Mengestu</h3>
      <p className="text-black animate-pulse">Senior Back-end Developer</p>
    </div>
    <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition">
      <img src={yeab} alt="Organizer 2" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
      <h3 className="text-xl font-bold mb-1 text-black">Yeabsra</h3>
      <p className="text-black animate-pulse">Flutter Developer</p>
    </div>
  </div>
</section>

        {/* Sponsors Section with Swiper */}
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
                    {[alx, chappa, cbe, tele, telebirr].map((sponsor, index) => (
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
       
      </div>
      <EventSections venue={"Lideta Area Balcha Hospital Capstone Building, Addis Ababa"}
      date={"2"} />
    </LayOut>
  );
}

export default Event1;
