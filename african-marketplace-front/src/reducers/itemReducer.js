import {
	ADD_ITEM_START,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_ERROR,
	GET_ITEMS_START,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_ERROR,
	UPDATE_ITEM_START,
	UPDATE_ITEM_SUCCESS,
	UPDATE_ITEM_ERROR,
	DELETE_ITEM_START,
	DELETE_ITEM_SUCCESS,
	DELETE_ITEM_ERROR,
} from '../actions/itemActions';

const initialState = {
	loading: false,
	error: '',
	reloadItems: 'false',
};

export const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_START:
			return {
				...state,
				loading: true,
			};
		case ADD_ITEM_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case ADD_ITEM_ERROR:
			return {
				...state,
				loading: false,
			};
		case GET_ITEMS_START:
			return {
				...state,
			};
		case GET_ITEMS_SUCCESS:
			return {
				...state,
			};
		case GET_ITEMS_ERROR:
			return {
				...state,
			};
		default:
			return state;
	}
};
