import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiEndpoints = {
  login: "/auth/login",
  validateToken: "/validate-token"
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
  }
};

export default authAPI;
