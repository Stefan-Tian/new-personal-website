import Experience from 'components/Experience';
import workExperienceList from 'data/workExperience';

const ExperienceList = () => {
  return (
    <div className="experience-list">
      {workExperienceList.map((record) => (
        <Experience key={record.company} {...record} />
      ))}
      <div className="experience">
        <div className="experience__heading">
          <div className="experience__company">
            National Chengchi University
          </div>
          <div className="experience__job-title">
            Bachelor of science in Psychology
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
