import {
	LOG_IN_START,
	LOG_IN_SUCCESS,
	LOG_IN_ERROR,
} from '../actions/logInActions';

const initialState = {
	username: '',
	id: null,
	loading: false,
	error: '',
};

export const logInReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_START:
			return {
				...state,
				loading: true,
			};
		case LOG_IN_SUCCESS:
			return {
				...state,
				username: action.payload.username,
				id: action.payload.id,
				loading: false,
				error: '',
			};
		case LOG_IN_ERROR:
			return {
				...state,
				error: `Oops, something went wrong - ${action.payload.error}`,
				loading: false,
			};
		default:
			return state;
	}
};
