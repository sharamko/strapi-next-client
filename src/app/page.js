import Card from '@/components/Card';
import strapiConfig from '@/strapiConfig';

const reqOptions = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  next: { revalidate: 10 },
};
const fetchHomepage = async () => {
  const data = await fetch(
    `${strapiConfig.api}/api/posts?populate=*`,
    reqOptions
  );
  const document = await data.json();
  return document;
};

const homepageDoc = await fetchHomepage();

// const items = homepageDoc.data.attributes.HomepageDynamic;
export async function generateMetadata() {
  return {
    // title: homepageDoc.data.attributes.MetaTitle,
    // description: homepageDoc.data.attributes.MetaDescription,
  };
}

export default async function Home() {
  homepageDoc.data.map((el) => console.log(el.attributes));
  // console.log(homepageDoc.data);
  return (
    <section>
      {homepageDoc.data.map((post, index) => {
        return <Card key={index} attributes={post.attributes} />;
      })}
      {/* <h1>{homepageDoc.data.attributes.MetaTitle}</h1>
      <p>{homepageDoc.data.attributes.MetaDescription}</p>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {item.__component === 'sections.hero' && <Hero data={item} />}
            {item.__component === 'cards.cards' && <Cards data={item} />}
          </div>
        ))}
      </div> */}
    </section>
  );
}
