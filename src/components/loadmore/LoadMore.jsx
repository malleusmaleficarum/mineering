'use client';
import { fetchPosts } from '@/utils/actions';
import { useState } from 'react';

let start = 5;

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(5);

  const handleClick = () => {
    fetchPosts(start).then((res) => {
      setData([...data, ...res]);
      setStart((prev) => prev + 5);
    });
  };

  return (
    <div>
      {data.map((data, index) => (
        <div key={data.id}>
          <p>id : {data.id}</p>
          <p>title : {data.title}</p>
          <p>body : {data.body}</p>
          <br />
        </div>
      ))}
      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

export default LoadMore;
