import Image from 'next/image';
import styles from './productdetail.module.scss';
import DOMPurify from 'isomorphic-dompurify';
import Title from '@/components/Title/Title';

export const metadata = {
  title: 'Services | Mineering',
  description: '',
};

const DetailProduct = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_HOSTED}/product?acf_format=standard&_fields=id,slug,title,acf,modified&slug=${params.slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const sanitizeData = DOMPurify.sanitize(data[0].acf.wyywywy);
  const child = params.slug === 'aims' ? false : true;
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
        <div dangerouslySetInnerHTML={{ __html: sanitizeData }} />
        <div className={styles['image-wrapper']}>
          <Image src={'/images/hero-image.png'} alt='' fill priority />
        </div>
      </div>

      {child && (
        <div className={styles['full-child']}>
          {/* CONTENT CHILD */}
          <div className={styles['child-container']}>
            <div className={styles.left}>
              <h1>Sub Child 1</h1>
            </div>
            <div className={styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          {/* CONTENT CHILD */}
          <div className={styles['child-container']}>
            <div className={styles.left}>
              <h1>Sub Child 1</h1>
            </div>
            <div className={styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          {/* CONTENT CHILD */}
          <div className={styles['child-container']}>
            <div className={styles.left}>
              <h1>Sub Child 1</h1>
            </div>
            <div className={styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          {/* CONTENT CHILD */}
          <div className={styles['child-container']}>
            <div className={styles.left}>
              <h1>Sub Child 1</h1>
            </div>
            <div className={styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          {/* CONTENT CHILD */}
          <div className={styles['child-container']}>
            <div className={styles.left}>
              <h1>Sub Child 1</h1>
            </div>
            <div className={styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
