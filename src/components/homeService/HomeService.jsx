import Link from 'next/link';
import styles from './homeService.module.scss';
import ServiceCard from './ServiceCard';

const HomeService = () => {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h1>Services</h1>
        <Link href={'/services'}>See More</Link>
      </div>
      {/* Grid */}
      <div className={styles['content-container']}>
        <ServiceCard
          title={'Asset Integrity Management System (AIMS)'}
          link={'#'}
        />
        <ServiceCard
          title={'Mining Technology and Mineral Processing'}
          link={'#'}
        />
        <ServiceCard title={'Engineering Services'} link={'#'} />
        <ServiceCard title={'Professional Development Programs'} link={'#'} />
      </div>
    </div>
  );
};

export default HomeService;
