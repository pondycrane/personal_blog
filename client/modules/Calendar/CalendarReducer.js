import { ADD_SCHEDULE, IS_LOADING } from './CalendarActions';

const initialState = {
  data: [],
  loading: false,
};

const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE :
      return {
        loading: false,
        data: action.schedule,
      };
    case IS_LOADING :
      return {
        loading: true,
        data: [],
      };
    default:
      return state;
  }
};

export const getSchedule = state => state.calendar.data;
export const getLoading = state => state.calendar.loading;

export default CalendarReducer;
