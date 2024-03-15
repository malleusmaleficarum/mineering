import Image from 'next/image';
import styles from './productdetail.module.scss';
import DOMPurify from 'isomorphic-dompurify';

const DetailProduct = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?acf_format=standard&_fields=id,slug,title,acf,modified&slug=${params.slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const sanitizeData = DOMPurify.sanitize(data[0].acf.wyywywy);

  return (
    <div className={styles.container}>
      <p>{data[0].title.rendered}</p>
      <p>{data[0].acf.textarea}</p>
      <div style={{ position: 'relative', width: '100%', height: '100px' }}>
        <Image src={data[0].acf.image} fill priority />
      </div>
      <a href={data[0].acf.file.url}>{data[0].acf.file_name}</a>

      <div>
        <div dangerouslySetInnerHTML={{ __html: sanitizeData }} />
      </div>
    </div>
  );
};

export default DetailProduct;
