'use client';

import Link from 'next/link';
import SliderCard from './SliderCard';
import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/scss';

const Slider = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <h1>News and Articles</h1>
        <Link href={'/news'}>See More</Link>
      </div>
      {ready && (
        <div className={styles['card-container']}>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
            }}
          >
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Slider;
