import api from './api';

import type { ExperiencsResponse, ProjectsResponse } from './types';

const getProjects = async () => {
  return await api<{}, ProjectsResponse>('get', '/projects');
};

const getExperiences = async () => {
  return await api<{}, ExperiencsResponse>('get', 'experiences');
};

const services = {
  getProjects,
  getExperiences,
};

export default services;
