'use client';

import Link from 'next/link';
import SliderCard from './SliderCard';
import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/scss';

const Slider = () => {
  const [ready, setReady] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?_fields=date,title,slug,featured_media,fimg_url,categories,excerpt&per_page=4`
    );
    const data = await res.json();

    const resCat = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories?_fields=id,name`
    );
    const catData = await resCat.json();
    setSliderData(data);
    setCategoriesData(catData);
    setReady(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles['header-container']}>
          <h1>Projects and Resources</h1>
          <Link href={'/projects-and-resources'}>See More</Link>
        </div>
        {ready && (
          <div className={styles['card-container']}>
            {sliderData.length === 0 ? (
              <h1>No Data</h1>
            ) : (
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  800: { slidesPerView: 3.2 },
                }}
              >
                {sliderData.map((data, i) => (
                  <SwiperSlide key={i}>
                    <SliderCard categories={categoriesData} data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
