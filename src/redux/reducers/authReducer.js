import * as types from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null
      };
    case types.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, error: action.payload };
    case types.LOGOUT:
      return { ...state, user: null, isAuthenticated: false, error: null };
    case types.REGISTER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;