import Image from 'next/image';

interface ProjectProps {
  blurImgPath: string;
  imgPath: string;
  name: string;
}

const Project = ({ blurImgPath, imgPath, name }: ProjectProps) => {
  return (
    <div className="project">
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
    </div>
  );
};

export default Project;
