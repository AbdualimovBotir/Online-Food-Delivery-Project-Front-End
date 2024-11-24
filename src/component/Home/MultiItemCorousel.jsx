import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './topMeel';
import CorouselItem from './CorouselItem';
import './Home.css'; // CSS faylingizni import qilish

const MultiItemCorousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {topMeels.map((item) => (
          <CorouselItem 
            key={item.title}  // `index`ni `item.title` bilan almashtirish
            image={item.image} 
            title={item.title} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCorousel;
