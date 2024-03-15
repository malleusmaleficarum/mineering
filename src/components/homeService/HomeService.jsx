import Link from 'next/link';
import styles from './homeService.module.scss';
import ServiceCard from './ServiceCard';

const HomeService = () => {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h1>Services</h1>
        <Link href={'/products'}>See More</Link>
      </div>
      {/* Grid */}
      <div className={styles['content-container']}>
        <ServiceCard title={'Asset Integrity Management System (AIMS)'} />
        <ServiceCard title={'Mining Technology and Mineral Processing'} />
        <ServiceCard title={'Engineering Services'} />
        <ServiceCard title={'Professional Development Programs'} />
      </div>
    </div>
  );
};

export default HomeService;
