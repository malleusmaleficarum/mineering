import Link from 'next/link';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';
import ServiceCard from '@/components/homeService/ServiceCard';

export const metadata = {
  title: 'Products and Services',
  description: '',
};

const Products = () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/services?acf_format=standard&_fields=id,slug,title,acf,modified`,
  //   { next: { revalidate: 3600 } }
  // );
  // const data = await response.json();

  return (
    <div className={styles.container}>
      {/* {data.map((d) => (
        <div key={d.id} style={{ marginBottom: '10px' }}>
          <p>{d.title.rendered}</p>
          <p>{new Date(d.modified).toLocaleString()}</p>
          <Link href={`/products/${d.slug}`}>{d.slug}</Link>
        </div>
      ))} */}
      {/* ----------------------- */}
      {/* ----------------------- */}

      <Title title={'Products and Services'} />
      <div className={styles['title-container']}>
        <h1>
          Tides of Expertise, <br />
          Waves of Progress
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className={styles['full-content']}>
        <div className={styles['content-container']}>
          <ServiceCard
            title={'Asset Integrity Management System (AIMS)'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Mining Technology and Mineral Processing'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Engineering Services'}
            link={'/products-and-services/engineering-services'}
          />
          <ServiceCard
            title={'Professional Development Programs'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Engineering Software'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Energy Infrastructures'}
            link={'/products-and-services/aims'}
          />
          <ServiceCard
            title={'Technology Development'}
            link={'/products-and-services/aims'}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
