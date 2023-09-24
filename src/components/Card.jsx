import Link from 'next/link';

const Card = ({ attributes }) => {
  // console.log(attributes.Slug);
  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
      <Link href={`/${attributes.Slug}`}>{attributes.PostTitle}</Link>
      <p>{attributes.PostText}</p>
      <p>{attributes.PostCard[0].CardTitle}</p>
      <p>{attributes.PostCard[0].CardText}</p>
    </div>
  );
};

export default Card;
