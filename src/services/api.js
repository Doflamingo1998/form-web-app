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
  createAndListSurvey: "/surveys",
  register: "/auth/register",
};

export const authAPI = {
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

export const surveyAPI = {
  createSurvey: async (survey) => {
    try {
      const storedToken = localStorage.getItem("token");
      const response = await instance.post(
        apiEndpoints.createAndListSurvey,
        survey,
        {
          headers: {
            Authorization: `${storedToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  listSurvey: async () => {
    try {
      const storedToken = localStorage.getItem("token");
      const response = await instance.get(apiEndpoints.createAndListSurvey, {
        headers: {
          Authorization: `${storedToken}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};