import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const projectService = {
  getProjects: async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await axios.post(`${API_URL}/projects/`, projectData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default projectService;