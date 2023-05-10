import type { NextPage } from 'next';
import ProjectCard from 'components/project-card';
import { garenaProjects } from 'data/projects';
import Head from 'next/head';
import Categories from 'components/categories';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stefan Tien - Projects</title>
      </Head>
      {/* <Categories categories={['Garena']} /> */}
      <div>
        {garenaProjects.map(
          ({
            id,
            name,
            imgPaths,
            blurImgPath,
            descriptions,
            techStackIcons,
          }) => (
            <ProjectCard
              key={id}
              id={id}
              name={name}
              blurImgPath={blurImgPath}
              imgPath={imgPaths[0]}
              descriptions={descriptions}
              techStackIcons={techStackIcons}
            />
          )
        )}
      </div>
    </>
  );
};

export default Projects;
