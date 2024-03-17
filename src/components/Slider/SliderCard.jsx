import Image from 'next/image';
import styles from './sliderCard.module.scss';
import Link from 'next/link';

const SliderCard = () => {
  return (
    <Link href={'#'} className={styles.container}>
      {/* Image */}
      <div className={styles['img-container']}>
        <Image src={'/images/media.png'} fill priority />
      </div>
      <h2>Govt hikes windfall tax on petroleum crude</h2>
      <h3>Resources</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis
      </p>
      <Link href={'#'}>Read More</Link>
    </Link>
  );
};

export default SliderCard;
