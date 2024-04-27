import Link from 'next/link';
import styles from './homeService.module.scss';
import ServiceCard from './ServiceCard';

const HomeService = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <h1>Products and Services</h1>
          <Link href={'/products-and-services'}>See More</Link>
        </div>
        {/* Grid */}
        <div className={styles['content-container']}>
          <ServiceCard
            title={'Asset Integrity Management System (AIMS)'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Mineral Technology and Business'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Engineering Services'}
            link={'/products-and-services/engineering-services'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeService;
