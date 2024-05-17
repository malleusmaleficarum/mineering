'use server';

export const fetchPosts = async (start, params) => {
  try {
    const url = params
      ? `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=1&offset=${start}&categories=${params}`
      : `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=1&offset=${start}`;
    const response = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
