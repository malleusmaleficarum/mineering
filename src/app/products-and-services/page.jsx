import Link from 'next/link';
import styles from './page.module.scss';
import Title from '@/components/Title/Title';
import ServiceCard from '@/components/homeService/ServiceCard';

export const metadata = {
  title: 'Products and Services',
  description: '',
};

const Products = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product?acf_format=standard&_fields=id,slug,title,acf,modified&orderby=title&order=asc`,
    { next: { revalidate: 1 } }
  );
  const data = await response.json();

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
        <p>
          Every project is a unique voyage, We leverage our deep expertise in
          energy industry to guide you through complex challenges and deliver
          cost-effective solutions. Our seasoned engineers, professionals and
          consultants serve clients in both energy and mining industries through
          our seven main competencies below.
        </p>
      </div>
      <div className={styles['full-content']}>
        <div className={styles['content-container']}>
          {data.map((data, i) => (
            <ServiceCard
              key={i}
              title={data.title.rendered}
              link={`/products-and-services/${data.slug}`}
              image={data.acf['featured-image']}
            />
          ))}
          {/* <ServiceCard
            title={'Asset Integrity Management System (AIMS)'}
            link={'/products-and-services/aims'}
          />] */}
        </div>
      </div>
    </div>
  );
};

export default Products;
