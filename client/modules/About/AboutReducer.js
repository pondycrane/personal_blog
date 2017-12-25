const profile = require('./AboutProfile.json');
import { ADD_ABOUT } from './AboutActions';

const initialState = { data: Object.assign({}, profile) };

const AboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ABOUT :
      return {
        data: Object.assign({}, profile),
      };

    default:
      return state;
  }
};

export const getAbout = state => state.about.data;

export default AboutReducer;
