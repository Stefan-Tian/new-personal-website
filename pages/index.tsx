import Head from 'next/head';
import ExperienceList from 'components/experience-list';
import WordPiece from 'components/word-piece';
import styles from 'styles/modules/home.module.scss';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stefan Tien - Personal Website</title>
        <meta name="description" content="Stefan Tien - resume and portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.hero}>
        <p className={styles.intro}>
          <span className={styles.paragraph}>
            Hi, I’m Stefan, a <WordPiece word="software engineer" />{' '}
            specializing in <WordPiece word="frontend" />.<br />
          </span>
          I have over 3 years of professional experience building production
          ready web applications using <WordPiece word="React and Vue" />.
        </p>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://ignyte-public.s3.us-west-1.amazonaws.com/hero-developer.png"
            alt="developer-portrait"
          />
        </div>
      </div>
      <ExperienceList />
    </>
  );
};

export default Home;
