import { ADD_SCHEDULE } from './CalendarActions';

const initialState = { data: [] };

const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE :
      return {
        data: action.schedule,
      };
    default:
      return state;
  }
};

export const getSchedule = state => state.calendar.data;

export default CalendarReducer;
