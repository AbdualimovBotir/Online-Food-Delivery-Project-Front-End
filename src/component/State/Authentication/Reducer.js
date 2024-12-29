import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
  LOGOUT
} from './ActionType';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        jwt: action.payload, 
        success: "Register/Login Success", 
        error: null 
      };

    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        favorites: state.favorites.some(item => item.id === action.payload.id)
          ? state.favorites.filter(item => item.id !== action.payload.id)
          : [action.payload, ...state.favorites]
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case ADD_TO_FAVORITE_FAILURE:
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload, 
        success: null 
      };

    case LOGOUT:
      return {
        ...state,
        jwt: null,
        user: null,
        favorites: [],
        success: 'Logout successful',
        error: null
      };

    default:
      return state;
  }
};

export default authReducer;
