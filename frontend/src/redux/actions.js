// src/redux/actions.js
export const FETCH_PROPERTIES_REQUEST = 'FETCH_PROPERTIES_REQUEST';
export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS';
export const FETCH_PROPERTIES_FAILURE = 'FETCH_PROPERTIES_FAILURE';

export const fetchPropertiesRequest = () => ({
  type: FETCH_PROPERTIES_REQUEST,
});

export const fetchPropertiesSuccess = (properties) => ({
  type: FETCH_PROPERTIES_SUCCESS,
  payload: properties,
});

export const fetchPropertiesFailure = (error) => ({
  type: FETCH_PROPERTIES_FAILURE,
  payload: error,
});
