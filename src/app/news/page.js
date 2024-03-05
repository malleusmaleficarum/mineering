import styles from './page.module.scss';
import { fetchPosts } from '@/utils/actions';
import LoadMore from '@/components/loadmore/LoadMore';

const News = async () => {
  const data = await fetchPosts(0);

  return (
    <div className={styles.container}>
      {data}
      <LoadMore />
    </div>
  );
};

export default News;
