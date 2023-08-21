import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-form-survey.fly.dev",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiEndpoints = {
  login: "/auth/login",
  validateToken: "/validate-token",
  register: "/auth/register",
};

const authAPI = {
  login: async (credentials) => {
    try {
      const response = await instance.post(apiEndpoints.login, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  validateToken: async (token) => {
    try {
      const response = await instance.post(
        apiEndpoints.validateToken,
        {},
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  register: async (registration) => {
    try {
      const response = await instance.post(apiEndpoints.register, registration);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default authAPI;
