import axios from 'axios';
import { api } from '../../config/api';// API configuration
import {
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE
} from "./ActionType"; // Importing action types

// Fetch all restaurants
export const getAllRestaurants = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });

    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      console.log("All restaurants:", data);
    } catch (error) {
      dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error.message });
      console.error("Error fetching restaurants:", error);
    }
  };
};

// Fetch restaurant by ID
export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });

    try {
      const { response } = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });

      dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
      console.log("Restaurant by ID:", response);
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error.message });
      console.error("Error fetching restaurant by ID:", error);
    }
  };
};

// Fetch restaurants by user ID
export const getRestaurantsByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });

    try {
      const { data } = await api.get(`/api/admin/restaurants/user/`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
      console.log("Restaurants by User ID:", data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error.message });
      console.error("Error fetching restaurants by user ID:", error);
    }
  };
};

// Create a new restaurant
export const createRestaurant = (reqData) => {
  console.log("token----------",reqData.token);
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });

    try {
      const { data } = await api.post("/api/admin/restaurants", reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });

      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("Created restaurant:", data);
    } catch (error) {
      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error.message });
      console.error("Error creating restaurant:", error);
    }
  };
};

// Update a restaurant
export const updateRestaurant = (restaurantId, restaurantData, jwt) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });

    try {
      const { data } = await api.put(`/api/admin/restaurants/${restaurantId}`, restaurantData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data });
      console.log("Updated restaurant:", data);
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error.message });
      console.error("Error updating restaurant:", error);
    }
  };
};

// Delete a restaurant
export const deleteRestaurant = (restaurantId, jwt) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });

    try {
      const res = await api.delete(`/api/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload:restaurantId  });
      console.log("Deleted restaurant:", res.data);
    } catch (error) {
      dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error.message });
      console.error("Error deleting restaurant:", error);
    }
  };
};

// Update restaurant status
export const updateRestaurantStatus = (restaurantId, jwt) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });

    try {
      const { res } = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {},  {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data });
      console.log("Updated restaurant status:", res.data);
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error.message });
      console.error("Error updating restaurant status:", error);
    }
  };
};

// Create an event
export const createEventAction = (data, jwt,restaurantId) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });

    try {
      const { res } = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
      console.log("Created event:", res.data);
    } catch (error) {
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error.message });
      console.error("Error creating event:", error);
    }
  };
};

// Get all events
export const getAllEvents = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    try {
      const { res } = await api.get("/api/events", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      console.log("All events:", res.data);
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error.message });
      console.error("Error fetching events:", error);
    }
  };
};

// Delete an event
export const deleteEventAction = (eventId, jwt) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });

    try {
      const res = await api.delete(`/api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
      console.log("Deleted event:", res.data);
    } catch (error) {
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error.message });
      console.error("Error deleting event:", error);
    }
  };
};

// Get restaurants by event
export const getRestaurantsEvents = (restaurantId, jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });

    try {
      const { data } = await api.get(`/api/admin/events/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: data });
      console.log("Restaurants by event:", data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error.message });
      console.error("Error fetching restaurants by event:", error);
    }
  };
};

// Create a category
export const createCategoryAction = (reqData, jwt) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {
      const { res } = await api.post("/api/admin/category", reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
      console.log("Created category:", res.data);
    } catch (error) {
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error.message });
      console.error("Error creating category:", error);
    }
  };
};

// Get restaurants by category
export const getRestaurantsCategory = (restaurantId, jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });

    try {
      const { res } = await api.get(`/api/category/restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data });
      console.log("Restaurants by category:", res.data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error.message });
      console.error("Error fetching restaurants by category:", error);
    }
  };
};
