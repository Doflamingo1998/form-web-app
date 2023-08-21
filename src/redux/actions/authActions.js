import authAPI from "../../services/api";
import history from "../../utils/history";
import * as types from "./types";

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user
  };
};

export const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error
  };
};

export const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS,
  }
};

export const registerFailure = (error) => {
  return {
    type: types.REGISTER_FAILURE,
    payload: error
  }
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.login(credentials);
      const { token } = response.data;
      localStorage.setItem("token", token);
      const { name, email, role } = response.data;
      const user = { name, email, role };
      dispatch(loginSuccess(user));
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export const checkAuthStatus = () => {
  return async (dispatch) => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const response = await authAPI.validateToken(storedToken);
        const { name, email, role } = response.data;
        const user = { name, email, role };
        dispatch(loginSuccess(user));
      } catch (error) {
        dispatch(loginFailure(error.message));
      }
    } else {
      dispatch(loginFailure("Token not found"));
    }
  };
};

export const registerUser = (registration) => {
  return async (dispatch) => {
    try {
      await authAPI.register(registration);

      dispatch(registerSuccess());
      history.push("/login");
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};