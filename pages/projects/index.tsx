import type { NextPage } from 'next';
import Project from 'components/Project';
import projects from 'data/projects';

const Projects: NextPage = () => {
  return (
    <div className="project-list">
      <div className="project-list__title">My Public Projects From Garena</div>
      <div className="project-list__group">
        {projects.map(({ id, name, imgPaths, blurImgPath }) => (
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
  );
};

export default Projects;
