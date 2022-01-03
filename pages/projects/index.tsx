import type { NextPage } from 'next';
import Project from 'components/Project';
import { garenaProjects } from 'data/projects';
import Head from 'next/head';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stefan Tien - Projects</title>
      </Head>
      <div className="project-list">
        <div className="project-list__title">
          My Public Projects From Garena
        </div>
        <div className="project-list__group">
          {garenaProjects.map(({ id, name, imgPaths, blurImgPath }) => (
            <Project
              key={id}
              id={id}
              name={name}
              blurImgPath={blurImgPath}
              imgPath={imgPaths[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
