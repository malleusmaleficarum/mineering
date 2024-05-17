'use client';
import { fetchPosts } from '@/utils/actions';
import { useEffect, useState } from 'react';
import styles from './loadmore.module.scss';
import MediaCard from '../mediaCard/MediaCard';

const LoadMore = ({ params, categories }) => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(7);
  const [isLoading, setIsLoading] = useState(false);
  const [endResult, setEndResult] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    fetchPosts(start, params).then((res) => {
      setData([...data, ...res]);
      setStart((prev) => prev + 7);
      setIsLoading(false);
      if (res.length === 0) {
        setEndResult(true);
      }
    });
  };

  useEffect(() => {
    setData([]);
    setStart(7);
    setEndResult(false);
  }, [params]);

  return (
    <>
      {data.map((d) => (
        <MediaCard key={d.id} data={d} categories={categories} />
      ))}
      <div className={styles['button-container']}>
        {!endResult ? (
          <button onClick={handleClick} className={styles.button}>
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        ) : (
          <p>End of Result</p>
        )}
      </div>
    </>
  );
};

export default LoadMore;
