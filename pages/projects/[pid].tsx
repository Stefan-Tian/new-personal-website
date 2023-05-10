/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import styles from 'styles/modules/project-page.module.scss';

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
      <div className={styles.root}>
        <div className={styles.name}>{currentProject.name}</div>
        <Marquee
          speed={window?.innerWidth > 700 ? 90 : 40}
          gradient={false}
          pauseOnHover={true}
          className={styles.screenshotContainer}
        >
          {currentProject.imgPaths.map((imgPath) => (
            <img
              key={imgPath}
              src={imgPath}
              alt="project screenshot"
              className={styles.screenshot}
            />
          ))}
        </Marquee>
        <div className={styles.sectionTitle}>Tech Stack: </div>
        <div className={styles.sectionDescription}>
          {currentProject.techStack.map((tech, idx) => (
            <span className="project-page__tech" key={tech}>
              {tech}
              {idx < currentProject.techStack.length - 1 ? (
                <span>, </span>
              ) : null}
            </span>
          ))}
        </div>
        <div className={styles.sectionTitle}>Main Features: </div>
        <ul className={styles.sectionList}>
          {currentProject.descriptions.map((feature) => (
            <li key={feature} className={styles.sectionListItem}>
              {feature}
            </li>
          ))}
        </ul>
        {currentProject.challenges ? (
          <>
            <div className={styles.sectionTitle}>Challenges: </div>
            <ul className={styles.sectionList}>
              {currentProject.challenges.map((challenge) => (
                <li key={challenge} className={styles.sectionListItem}>
                  {challenge}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Project;
