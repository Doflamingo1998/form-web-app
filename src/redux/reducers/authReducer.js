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
    default:
      return state;
  }
};

export default authReducer;
