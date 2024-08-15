import Image from 'next/image';
import styles from './hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* BACKGROUND IMAGE */}
      <div className={styles['img-wrapper']}>
        <Image src={'/images/hero.jpg'} alt='Hero Image' fill priority />
      </div>
      {/* OVERLAY */}
      <div className={styles.overlay}></div>
      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles['first-section']}>
          <h1>
            Seas of Expertise,
            <br /> Crafting Tomorrow&apos;s <br />
            Infrastructure
          </h1>
          <h2>Your Energy Technology Consultants</h2>
          {/* <Link href={'#'}>All Services</Link> */}
        </div>
        <div className={styles['second-section']}>
          <Image
            src={'/images/logo.png'}
            alt='logo'
            width={200}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
