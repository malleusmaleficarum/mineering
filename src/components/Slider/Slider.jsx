import Link from 'next/link';
import SliderCard from './SliderCard';
import styles from './slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <h1>News and Articles</h1>
        <Link href={'/news'}>See More</Link>
      </div>
      <div className={styles['card-container']}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </div>
  );
};

export default Slider;
