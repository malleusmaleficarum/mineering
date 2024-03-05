import styles from './page.module.scss';
import { fetchPosts } from '@/utils/actions';
import LoadMore from '@/components/loadmore/LoadMore';

const News = async () => {
  const data = await fetchPosts(0);

  return (
    <div className={styles.container}>
      {data.map((data, index) => (
        <div key={data.id}>
          <p>id : {data.id}</p>
          <p>title : {data.title}</p>
          <p>body : {data.body}</p>
          <br />
        </div>
      ))}
      <LoadMore />
    </div>
  );
};

export default News;
