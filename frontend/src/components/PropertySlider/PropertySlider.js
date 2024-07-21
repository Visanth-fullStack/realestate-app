import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropertyCard from '../PropertyCard/PropertCard';

const PropertySlider = ({ properties }) => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: false,
    centerMode:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Slider>
  );
};

export default PropertySlider;
