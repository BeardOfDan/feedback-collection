import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({
      'type': FETCH_USER,
      'payload': (await axios.get('/api/currentUser')).data
    });
  };
};

export const handleToken = (token) => {
  return async (dispatch) => {
    dispatch({
      'type': FETCH_USER,
      'payload': (await axios.post('/api/stripe', token)).data
    });
  };
};
