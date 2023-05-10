import Experience from 'components/experience';
import workExperienceList from 'data/work-experience';

const ExperienceList = () => {
  return (
    <div className="experience-list">
      {workExperienceList.map((record) => (
        <Experience key={record.company} {...record} />
      ))}
    </div>
  );
};

export default ExperienceList;
