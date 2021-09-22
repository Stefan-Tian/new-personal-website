import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  id: number;
  blurImgPath: string;
  imgPath: string;
  name: string;
}

const Project = ({ id, blurImgPath, imgPath, name }: ProjectProps) => {
  return (
    <Link href={`projects/${id}`}>
      <a className="project">
        <div className="project__img-wrapper">
          <Image
            width={4.55}
            height={2.3}
            src={imgPath}
            layout="responsive"
            alt={`${name} image`}
            blurDataURL={blurImgPath}
            placeholder="blur"
          />
        </div>
        <div className="project__name">{name}</div>
      </a>
    </Link>
  );
};

export default Project;
