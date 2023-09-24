import Card from '@/components/Card';
import fetchPosts from '@/helpers/fetch-posts';

const PostPage = async (props) => {
  const blogs = await fetchPosts(`filters[Slug]=${props.params.slug}`);

  const post = blogs.data[0];

  return <div>{post.attributes.PostTitle}</div>;

  //   <Card attributes={attributes.data.attributes} />;
};

export default PostPage;
