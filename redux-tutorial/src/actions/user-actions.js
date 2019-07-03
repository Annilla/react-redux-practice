import axios from 'axios';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser (newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError () {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR!!'
    }
  }
}

export function apiRequest() {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'http://google.com'
    }).then(response => {
      console.log('SUCCESS');
      dispatch(updateUser(response.newUser));
    }).catch(response => {
      console.log('ERROR');
      dispatch(showError());
    })
  }
}