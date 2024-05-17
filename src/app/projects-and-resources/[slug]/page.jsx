import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import { format } from 'date-fns';

export const metadata = {
  title: 'Projects and Resources | Mineering',
  description: '',
};

const page = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${params.slug}&_fields=date,title,slug,content,featured_media,fimg_url,categories`
  );
  const data = await res.json();

  const resCat = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?_fields=id,name`
  );
  const catData = await resCat.json();
  const catName = catData.filter((cat) => cat.id === data[0].categories[0]);

  return (
    <div className={styles.container}>
      <h1>{data[0].title.rendered}</h1>

      <div className={styles['image-container']}>
        <Image src={data[0].fimg_url} alt='' priority fill />
      </div>
      <h3>
        {catName[0].name}{' '}
        <span>- {format(new Date(data[0].date), 'dd LLLL yyyy')}</span>
      </h3>
      <div
        className={styles['wys-content']}
        dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
      />
      <div className={styles.divider}></div>
    </div>
  );
};

export default page;
