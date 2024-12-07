import axios from 'axios';

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
import { API_URL } from '../../config/api';

// Register User Action
export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt);
    }

    // Redirect based on user role
    if (data.role === 'ROLE_RESTAURANT_OWNER') {
      reqData.navigate('/admin/restaurant');
    } else {
      reqData.navigate('/');
    }

    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    console.log("Register success", data);
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data?.message || error.message || 'Registration failed'
    });
    console.log("Register error", error);
  }
};

// Login User Action
export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.credentials);

    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt);
    }

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("Login success", data);

    // Redirect based on user role
    if (data.role === 'ROLE_RESTAURANT_OWNER') {
      reqData.navigate('/admin/restaurant');
    } else {
      reqData.navigate('/');
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || error.message || 'Login failed'
    });
    console.log("Login error", error);
  }
};

// Get User Action
export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  try {
    const { data } = await axios.get(
      `${API_URL}/user/profile`, // Endpoint to fetch user data
      {
        headers: {
          Authorization: `Bearer ${jwt}` // Sending JWT token in the Authorization header
        }
      }
    );

    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("User profile fetched", data);
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.response?.data?.message || error.message || 'Failed to fetch user data'
    });
    console.log("Get user error", error);
  }
};

// Add to Favorite Action (with jwt and restaurantId)
export const addToFavorite = (jwt, restaurantId) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });

  try {
    const { data } = await axios.post(
      `${API_URL}/user/favorites`, // API endpoint to add to favorites
      { restaurantId }, // Sending restaurantId in the request body
      {
        headers: {
          Authorization: `Bearer ${jwt}` // Sending JWT token in the Authorization header
        }
      }
    );

    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
    console.log("Added to favorites", data);
  } catch (error) {
    dispatch({
      type: ADD_TO_FAVORITE_FAILURE,
      payload: error.response?.data?.message || error.message || 'Failed to add to favorites'
    });
    console.log("Add to favorites error", error);
  }
};

// Logout Action
export const logout = () => async (dispatch) => {
  try {
    // Clear JWT token from localStorage
    localStorage.clear();
    // localStorage.removeItem('jwt');
    
    // Dispatch LOGOUT action
    dispatch({ type: LOGOUT });
    console.log("Logout success");
  } catch (error) {
    console.log("Logout error", error);
  }
};
