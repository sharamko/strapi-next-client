import strapiConfig from '@/strapiConfig';

const fetchPosts = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  };

  const data = await fetch(
    `${strapiConfig.api}/api/posts?populate=*&${params}`,
    reqOptions
  );
  const document = await data.json();
  return document;
};

export default fetchPosts;
