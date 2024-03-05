'use server';

export const fetchPosts = async (start) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`,
      {
        next: { revalidate: 7200 },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
