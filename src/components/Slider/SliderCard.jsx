import Image from 'next/image';
import styles from './sliderCard.module.scss';
import Link from 'next/link';

const SliderCard = () => {
  return (
    <div className={styles.container}>
      {/* Image */}
      <div className={styles['img-container']}>
        <Image src={'/images/news.png'} fill priority />
      </div>
      <h2>Govt hikes windfall tax on petroleum crude</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </p>
      <Link href={'#'}>Read More</Link>
    </div>
  );
};

export default SliderCard;
