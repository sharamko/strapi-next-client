import Header from '@/components/header';
import './globals.scss';
import { Nunito } from 'next/font/google';
const nunito = Nunito({ subsets: ['latin'] });
import strapiConfig from '@/strapiConfig';
import Footer from '@/components/footer';

const reqOptions = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  next: { revalidate: 10 },
};
const fetchLayout = async () => {
  const data = await fetch(
    `${strapiConfig.api}/api/layout?populate=*`,
    reqOptions
  );
  const document = await data.json();
  return document;
};

const layoutDoc = await fetchLayout();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="container">
          <Header data={layoutDoc.data.attributes.Header} />
          {children}
          <Footer data={layoutDoc.data.attributes.Footer} />
        </div>
      </body>
    </html>
  );
}
