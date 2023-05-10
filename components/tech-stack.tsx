import styles from 'styles/modules/tech-stack.module.scss';

interface TechStackProps {
  techStack: string[];
}

const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div className={styles.root}>
      {techStack.map((tech, idx) => (
        <img
          key={idx}
          className={styles.tech}
          src={`https://stefantien-personal-site.s3.us-west-1.amazonaws.com/techstack/${tech}.png`}
          alt={`${tech} icon`}
        />
      ))}
    </div>
  );
};

export default TechStack;
