import styles from 'styles/modules/experience.module.scss';
import TechStack from './tech-stack';

interface ExperienceProps {
  isCurrent: boolean;
  company: string;
  companyInfo: string;
  jobTitle: string;
  date: string;
  techStack: string[];
  accomplishments: string[];
}

const Experience = (props: ExperienceProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.company}>{props.company}</div>
      <div className={styles.companyInfo}>{props.companyInfo}</div>
      <div className={styles.title}>{props.jobTitle}</div>
      <div className={styles.date}>{props.date}</div>
      <TechStack techStack={props.techStack} />
      <ul className={styles.list}>
        {props.accomplishments.map((accomplishment, idx) => (
          <li className={styles.listItem} key={idx}>
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
