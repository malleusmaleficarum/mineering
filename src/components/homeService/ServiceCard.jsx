import Image from 'next/image';
import styles from './serviceCard.module.scss';
import Link from 'next/link';

const ServiceCard = ({ link, title }) => {
  return (
    <Link href={link} className={styles.container}>
      {/* Image */}
      <div className={styles['image-container']}>
        <Image src={'/images/service_1.png'} fill priority />
      </div>
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Title */}
      <div className={styles['title-container']}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default ServiceCard;
