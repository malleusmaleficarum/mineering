// 'use server';

// export const fetchPosts = async (start) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`,
//       {
//         next: { revalidate: 3600 },
//       }
//     );
//     const data = await response.json();
//     return data.map((data, index) => (
//       <div key={data.id}>
//         <p>id : {data.id}</p>
//         <p>title : {data.title}</p>
//         <p>body : {data.body}</p>
//         <br />
//       </div>
//     ));
//   } catch (error) {
//     console.log(error);
//   }
// };
