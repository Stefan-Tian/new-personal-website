interface ExperienceProps {
  isCurrent: boolean;
  company: string;
  jobTitle: string;
  accomplishments: string[];
}

const Experience = (props: ExperienceProps) => {
  return (
    <div
      className={`experience ${props.isCurrent ? 'experience--active' : ''}`}
    >
      <div className="experience__heading">
        <div className="experience__company">{props.company}</div>
        <div className="experience__job-title">{props.jobTitle}</div>
      </div>
      <div className="experience__accomplishments">
        {props.accomplishments.map((accomplishment, idx) => (
          <div className="experience__accomplishment" key={idx}>
            - {accomplishment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
