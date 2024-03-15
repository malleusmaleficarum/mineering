import Link from 'next/link';
import styles from './products.module.scss';

const Products = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?acf_format=standard&_fields=id,slug,title,acf,modified`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();

  console;
  return (
    <div className={styles.container}>
      {data.map((d) => (
        <div key={d.id} style={{ marginBottom: '10px' }}>
          <p>{d.title.rendered}</p>
          <p>{new Date(d.modified).toLocaleString()}</p>
          <Link href={`/products/${d.slug}`}>{d.slug}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
