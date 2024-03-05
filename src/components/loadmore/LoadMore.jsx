'use client';
import { fetchPosts } from '@/utils/actions';
import { useState } from 'react';

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [endResult, setEndResult] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    fetchPosts(start).then((res) => {
      setData([...data, ...res]);
      setStart((prev) => prev + 5);
      setIsLoading(false);
      if (res.length === 0) {
        setEndResult(true);
      }
    });
  };

  return (
    <div>
      {data}
      {!endResult ? (
        <button onClick={handleClick}>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      ) : (
        <p>End of Result</p>
      )}
    </div>
  );
};

export default LoadMore;
