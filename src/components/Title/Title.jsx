import Image from 'next/image';
import styles from './title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={styles['title-container']}>
      {/* image */}
      <div className={styles['image-container']}>
        <Image src={'/images/title-overlay.png'} alt='' fill priority />
      </div>
      {/* overlay */}
      <div className={styles.overlay} />
      {/* title */}
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Title;
