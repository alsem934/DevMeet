import React, { useState } from 'react';
import './carousel.css'
const Carousel = ({ images, message }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt="Image" />
            <div className="carousel-message">
              <p>{message}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="prev-btn">
        Prev
      </button>
      <button onClick={handleNext} className="next-btn">
        Next
      </button>
    </div>
  );
};

export default Carousel;