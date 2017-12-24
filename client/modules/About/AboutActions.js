import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ABOUT = 'ADD_ABOUT';

// Export Actions
export function addAbout() {
	return {
		type: ADD_ABOUT,
	};
}

// Fetch about data
export function fetchAbout() {
	return (dispatch) => {
		dispatch(addAbout());
	};
}
