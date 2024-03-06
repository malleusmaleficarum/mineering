import Image from 'next/image';
import styles from './hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* BACKGROUND IMAGE */}
      <div className={styles['img-wrapper']}>
        <Image src={'/images/hero-image.png'} alt='Hero Image' fill priority />
      </div>
      {/* OVERLAY */}
      <div className={styles.overlay}></div>
      {/* CONTENT */}
      <div className={styles.content}>
        <h1>
          Seas of Expertise,
          <br /> Shores of Solutions
        </h1>
        <h2>Your Offshore Technology Consultants</h2>
        <Link href={'#'}>All Services</Link>
      </div>
    </div>
  );
};

export default Hero;
