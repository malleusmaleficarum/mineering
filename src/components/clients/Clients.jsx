'use client';

import Image from 'next/image';
import styles from './clients.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/css/autoplay';

const clients = [
  {
    src: '/images/client-logo/pgnsaka.webp',
  },

  {
    src: '/images/client-logo/pln-enjiniring.png',
  },
  {
    src: '/images/client-logo/s2p.png',
  },
  {
    src: '/images/client-logo/pln-primer.png',
  },
  {
    src: '/images/client-logo/madam-energi.png',
  },
];

const Clients = () => {
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <h1>Clients</h1>
        {/* Client wrapper */}

        {/* <div className={styles['image-container']}>
        <Image src={clients[0].src} alt='' priority fill />
      </div> */}

        {clientReady && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
            }}
          >
            {clients.map((c, i) => (
              <SwiperSlide key={i}>
                <div className={styles['image-container']}>
                  <Image src={c.src} alt='' priority fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Clients;
