import Link from 'next/link';
import styles from 'styles/modules/project-card.module.scss';

interface ProjectCardProps {
  id: number;
  blurImgPath: string;
  imgPath: string;
  name: string;
  descriptions: string[];
  techStackIcons: string[];
}

const ProjectCard = ({
  id,
  blurImgPath,
  imgPath,
  name,
  descriptions,
  techStackIcons,
}: ProjectCardProps) => {
  return (
    <Link href={`projects/${id}`} className={styles.root}>
      <div className={styles.category}>Garena</div>
      <div className={styles.title}>{name}</div>
      <ol className={styles.excerpt}>
        {descriptions.map((description) => (
          <li key={description} className={styles.listItem}>
            {description}
          </li>
        ))}
      </ol>
      <div className={styles.imageContainer}>
        <img src={imgPath} alt={`${name} image`} />
      </div>
      <div className={styles.techStackIcons}>
        {techStackIcons.map((icon) => (
          <img
            key={icon}
            className={styles.techStackIcon}
            src={`https://stefantien-personal-site.s3.us-west-1.amazonaws.com/techstack/${icon}.png`}
            alt={`${icon} icon`}
          />
        ))}
      </div>
      <div className={styles.readMore}>read more</div>
    </Link>
  );
};

export default ProjectCard;
