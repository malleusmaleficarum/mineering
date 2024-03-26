import styles from './page.module.scss';
// import { fetchPosts } from '@/utils/actions';
import LoadMore from '@/components/loadmore/LoadMore';
import MediaCard from '@/components/mediaCard/MediaCard';
import Title from '@/components/Title/Title';

export const metadata = {
  title: 'Projects and Resources',
  description: '',
};

const Media = () => {
  // const data = await fetchPosts(0);

  return (
    <div className={styles.container}>
      {/* {data} */}
      <Title title={'Projects and Resources'} />
      <div className={styles['content-container']}>
        <h1 className={styles.title}>Resources</h1>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <LoadMore />
      </div>
    </div>
  );
};

export default Media;
