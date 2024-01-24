import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from './assets/img1.png';
import slide_image_2 from './assets/img2.jpg';
import slide_image_3 from './assets/img3.jpg';
import slide_image_4 from './assets/img4.jpg';
import slide_image_5 from './assets/img5.jpeg';
import slide_image_6 from './assets/img6.png';
import slide_image_7 from './assets/img7.png';

function App() {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    setSwiper(swiper);
  };

  const handleTransitionEnd = (swiper) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
      activeSlide.style.opacity = 1; // Ensure the opacity of the active slide is set to 1
      activeSlide.classList.add('active-slide');
    }

    // Set opacity for other slides based on their depth
    swiper.slides.forEach((slide, index) => {
      const depthDifference = Math.abs(index - swiper.realIndex);
      const opacity = 1 - depthDifference*depthDifference * 0.15; 
      slide.style.opacity = Math.max(opacity, 0.05); 
    });
  };

  return (
    <div className="container">
      <h1 className="heading">HEADING</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionEnd={handleTransitionEnd}
      >
<SwiperSlide>
          <div className="slide-content">
            <h2>Title 1</h2>
            <img src={slide_image_1} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 2</h2>
            <img src={slide_image_2} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 3</h2>
            <img src={slide_image_3} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 4</h2>
            <img src={slide_image_4} alt="Slide 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 5</h2>
            <img src={slide_image_5} alt="Slide 5" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 6</h2>
            <img src={slide_image_6} alt="Slide 6" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Title 7</h2>
            <img src={slide_image_7} alt="Slide 7" />
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
