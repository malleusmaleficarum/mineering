import Link from 'next/link';
import styles from './homeService.module.scss';
import ServiceCard from './ServiceCard';

const HomeService = async () => {
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
            title={'Mineral Technology and Business'}
            link={'/products-and-services/mineral-technology-and-business'}
            image={`/images/mineral-3.jpg`}
          />
          <ServiceCard
            title={'Oil and Gas Solution'}
            link={'/products-and-services/oil-and-gas-solution'}
            image={`/images/oil-and-gas.jpg`}
          />
          <ServiceCard
            title={'Asset Integrity Management System (AIMS)'}
            link={
              '/products-and-services/asset-integrity-management-system-aims'
            }
            image={`/images/aims.jpeg`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeService;
