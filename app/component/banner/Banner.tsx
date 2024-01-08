import React from 'react';
import Image from 'next/image';
import styles from '../../styles/banner.module.css';
import bannerImages from '/public/banner_image_1.webp';

const Banner = () => {
 return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <Image
          src={bannerImages}  // replace with your image path
          alt="Image 1"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}>
          <h2 className={styles.bannerText}>Your Text Here</h2>
        </div>
      </div>
      {/* Add more carousel items as needed */}
    </div>
  );
};

export default Banner;
