import Image from 'next/image';
import styles from './productdetail.module.scss';
import DOMPurify from 'isomorphic-dompurify';
import Title from '@/components/Title/Title';

export const metadata = {
  title: 'Services',
  description: '',
};

const DetailProduct = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product?acf_format=standard&_fields=id,slug,title,acf,modified&slug=${params.slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const sanitizeData = DOMPurify.sanitize(data[0].acf.content);
  data[0].acf.image_content;

  return (
    <div className={styles.container}>
      {/* <p>{data[0].title.rendered}</p>
      <p>{data[0].acf.textarea}</p>
      <div style={{ position: 'relative', width: '100%', height: '100px' }}>
        <Image src={data[0].acf.image} fill priority />
      </div>
      <a href={data[0].acf.file.url}>{data[0].acf.file_name}</a>

      <div>
        <div dangerouslySetInnerHTML={{ __html: sanitizeData }} />
      </div> */}

      {/* --------------------------- */}

      <Title title={data[0].title.rendered} />
      <div className={styles['content-container']}>
        <div className={styles.wrapper}>
          <h2 className={styles.caption}>{data[0].acf.caption}</h2>
          <div
            className={styles['wys-content']}
            dangerouslySetInnerHTML={{ __html: sanitizeData }}
          />
          {/* <div className={styles['image-wrapper']}>
            <Image src={data[0].acf.image_content} alt='' fill priority />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
