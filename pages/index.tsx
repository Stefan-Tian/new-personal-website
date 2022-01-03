import Image from 'next/image';
import Head from 'next/head';
import ExperienceList from 'components/ExperienceList';
import WordPiece from 'components/WordPiece';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stefan Tien - Personal Website</title>
      </Head>
      <div className="home">
        <div className="home__top-section">
          <div className="home__intro">
            Hi, I’m Stefan, a <WordPiece word="software engineer" />{' '}
            specializing in <WordPiece word="frontend" />.
            <br />
            <span className="home__intro--part2">
              I have over 2 years of professional experience building production
              ready web applications using <WordPiece word="React and Vue" />.
            </span>
          </div>
          <div className="home__image-wrapper">
            <Image
              width="100%"
              height="100%"
              src="https://ignyte-public.s3.us-west-1.amazonaws.com/personal-site-developer.svg"
              layout="responsive"
              alt="developer image"
            />
          </div>
        </div>
        <ExperienceList />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const res = await services.getExperiences();

//   return {
//     props: { experiences: res.data },
//   };
// }

export default Home;
