import Image from 'next/image';
import styles from './mediaCard.module.scss';
import Link from 'next/link';

const MediaCard = () => {
  return (
    <Link
      href={'/media/gain-strategic-insights-from'}
      className={styles['card-container']}
    >
      {/* Image */}
      <div className={styles.left}>
        <div className={styles['image-container']}>
          <Image src={'/images/media.png'} alt='' fill priority />
        </div>
      </div>
      {/* Info */}
      <div className={styles['info-container']}>
        <div className={styles.top}>
          <h1>
            Gain strategic insights from deepwater oil and gas powerhouses
          </h1>
          <h2>Subheading Lorem Ipsum</h2>
          <h3>Resource</h3>
        </div>
        <div className={styles.bottom}>
          <p>12 March 2023</p>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
