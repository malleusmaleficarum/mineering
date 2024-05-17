import styles from './page.module.scss';
// import { fetchPosts } from '@/utils/actions';
import LoadMore from '@/components/loadmore/LoadMore';
import MediaCard from '@/components/mediaCard/MediaCard';
import Title from '@/components/Title/Title';

export const metadata = {
  title: 'Projects and Resources',
  description: '',
};

const Media = async ({ searchParams }) => {
  const url = searchParams.category
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=7&offset=0&categories=${searchParams.category}`
    : `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=7&offset=0`;
  const response = await fetch(url, { next: { revalidate: 1 } });
  const data = await response.json();

  const resCat = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?_fields=id,name`
  );
  const catData = await resCat.json();

  return (
    <div className={styles.container}>
      <Title title={'Projects and Resources'} />
      {data.length === 0 ? (
        <h1 className={styles['no-data']}>No Data</h1>
      ) : (
        <div className={styles['content-container']}>
          {data.map((d) => (
            <MediaCard key={d.id} data={d} categories={catData} />
          ))}

          <LoadMore params={searchParams.category} categories={catData} />
        </div>
      )}
    </div>
  );
};

export default Media;
