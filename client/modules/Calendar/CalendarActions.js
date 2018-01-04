import fetch from 'isomorphic-fetch';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const IS_LOADING = 'IS_LOADING';

export function callCalendar() {
  return fetch('http://104.236.36.69:5000/', {
    headers: { 'content-type': 'application/json' },
    method: 'get',
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );
}

export function addSchedule(schedule) {
  return {
    type: ADD_SCHEDULE,
    schedule,
  };
}

export function isLoading() {
  return {
    type: IS_LOADING,
  };
}

export function fetchCalendar() {
  return (dispatch) => {
    dispatch(isLoading());
    return callCalendar().then(res => {
      dispatch(addSchedule(res.data));
    });
  };
}
