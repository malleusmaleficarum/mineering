'use client';
import { fetchPosts } from '@/utils/actions';
import { useState } from 'react';
import styles from './loadmore.module.scss';

const LoadMore = () => {
  // const [data, setData] = useState([]);
  // const [start, setStart] = useState(5);
  // const [isLoading, setIsLoading] = useState(false);
  // const [endResult, setEndResult] = useState(false);

  // const handleClick = () => {
  //   setIsLoading(true);
  //   fetchPosts(start).then((res) => {
  //     setData([...data, ...res]);
  //     setStart((prev) => prev + 5);
  //     setIsLoading(false);
  //     if (res.length === 0) {
  //       setEndResult(true);
  //     }
  //   });
  // };

  return (
    <div className={styles['button-container']}>
      {/* {data}
      {!endResult ? (
        <button onClick={handleClick} className={styles.button}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      ) : (
        <p>End of Result</p>
      )} */}

      <button className={styles.button}>{'Load More'}</button>
    </div>
  );
};

export default LoadMore;
