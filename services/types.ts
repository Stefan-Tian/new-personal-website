export interface Project {
  id: number;
  name: string;
  imgPaths: string[];
  blurImgPath: string;
  descriptions: string[];
  challenges: string[];
  techStack: string[];
}

export type ProjectsResponse = Project[];

export interface Experience {
  id: number;
  institution: string;
  title: string;
  achievements: string;
}

export type ExperiencsResponse = Experience[];
