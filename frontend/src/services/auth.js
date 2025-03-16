import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // URL de l'API Django

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login/`, { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register/`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  isProfessor: () => {
    const user = authService.getCurrentUser();
    return user && user.user_type === 'professor';
  },

  isStudent: () => {
    const user = authService.getCurrentUser();
    return user && user.user_type === 'student';
  },
};

export default authService;