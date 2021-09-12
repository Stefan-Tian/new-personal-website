import Image from 'next/image';
import type { NextPage } from 'next';
import ExperienceList from 'components/ExperienceList';

const Home: NextPage = () => {
  return (
    <div className="home">
      <div className="home__top-section">
        <div className="home__intro">
          Hi, I’m Stefan, a{' '}
          <span className="home__gradient home__gradient--bp">
            software engineer
          </span>{' '}
          specializing in the{' '}
          <span className="home__gradient home__gradient--bp">frontend</span>.
          <br />
          <span className="home__intro--part2">
            I have over 2 years of professional experience building production
            ready web applications using{' '}
            <span className="home__gradient home__gradient--bp">
              React and Vue
            </span>
            .
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
  );
};

export default Home;
