// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from an external API endpoint9
//     const res = await fetch('..');
//     return res.json();
//   }

// //   Ayrıca veritabanını doğrudan sorgulayabilirsiniz:
//   import someDatabaseSDK from 'someDatabaseSDK'

//   const databaseClient = someDatabaseSDK.createClient(...)
  
//   export default async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from a database
//     return databaseClient.query('SELECT posts...')
//   }



//   export async function getServerSideProps(context) {
//     return {
//       props: {
//         // props for your component
//       },
//     };
//   }


//   import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }