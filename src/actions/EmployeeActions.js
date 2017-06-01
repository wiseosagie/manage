import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};


export const employeeCreate = ({ name, phone }) => {
  const { currentUser } = firebase.auth();

  return(dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList( { type: 'reset' })
    });
  };
};

export const employeesFetch = () => {
  //const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/ZnL9nlbFmCbnDkzKDWnLdbtPbWX2/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};
