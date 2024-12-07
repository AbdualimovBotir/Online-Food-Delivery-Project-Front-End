import { isPresentInFavorites } from '../../config/logic'; // Boshqa joyda
// isPresentInFavorites funksiyasini import qilish

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
} from './ActionType'; // ActionType importi

export const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Request actions - Loading state
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    // Success actions
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        jwt: action.payload, 
        success: "Register/Login Success", 
        error: null 
      };

    // Add to favorites logic - Toggle favorite status
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        favorites: isPresentInFavorites(state.favorites, action.payload)
          ? state.favorites.filter(item => item.id !== action.payload.id)  // If already in favorites, remove it
          : [action.payload, ...state.favorites]  // Else, add to favorites
      };

    // Failure actions - Set error
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

    // Logout logic - Reset state
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
