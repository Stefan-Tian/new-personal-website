/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
// import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { garenaProjects } from 'data/projects';
import Head from 'next/head';

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  if (typeof pid !== 'string') {
    return (
      <div className="project-page project-page__not-found">
        Oops, seems like the project has been classified as a top secret.
      </div>
    );
  }

  const currentProject = garenaProjects.find(
    ({ id }) => id === parseInt(pid, 10)
  );

  if (!currentProject) {
    return (
      <div className="project-page project-page__not-found">
        Oops, seems like the project has been classified as a top secret.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{currentProject.name}</title>
      </Head>
      <div className="project-page">
        <div className="project-page__name">{currentProject.name}</div>
        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          {currentProject.imgPaths.map((imgPath) => (
            <div key={imgPath} className="project-page__image-wrapper">
              <img src={imgPath} alt="project screenshot" />
            </div>
          ))}
        </Marquee>
        <div className="project-page__section">
          <div className="project-page__section__title">Tech Stack: </div>
          <div className="project-page__section__line">
            {currentProject.techStack.map((tech, idx) => (
              <span className="project-page__tech" key={tech}>
                {tech}
                {idx < currentProject.techStack.length - 1 ? (
                  <span>,</span>
                ) : null}
              </span>
            ))}
          </div>
          <div className="project-page__section">
            <div className="project-page__section__title">Main Features: </div>
            <ul className="project-page__section__list">
              {currentProject.descriptions.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          {currentProject.challenges ? (
            <div className="project-page__section">
              <div className="project-page__section__title">Challenges: </div>
              <ul className="project-page__section__list">
                {currentProject.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Project;
