import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './image-slide.module.css';

const SlideImage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={style.carousel} >
      <Image
        src={images[currentImageIndex]}
        alt={`Slide Image ${currentImageIndex + 1}`}
        width={800}
        height={600}
        priority
      />
    </div>
  );
};

export default SlideImage;