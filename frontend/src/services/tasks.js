import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const taskService = {
  getTasks: async (projectId) => {
    try {
      const response = await axios.get(`${API_URL}/tasks/`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createTask: async (projectId, taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks/`, taskData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default taskService;