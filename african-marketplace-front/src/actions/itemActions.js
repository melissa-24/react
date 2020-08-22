import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const GET_ITEMS_START = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
export const UPDATE_ITEM_START = 'UPDATE_ITEM_START';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR';
export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';

export const addItem = (formState, id) => (dispatch) => {
	dispatch({ type: ADD_ITEM_START });
	axiosWithAuth()
		.post('/items', {
			category_id: formState.category,
			user_id: id,
			product: formState.name,
			description: formState.description,
			price: formState.price,
		})
		.then((res) => {
			dispatch({ type: ADD_ITEM_SUCCESS });
		})
		.catch((err) => {
			dispatch({ type: ADD_ITEM_ERROR });
		});
};

export const getItems = (username, password) => (dispatch) => {
	dispatch({ type: GET_ITEMS_START });
	axiosWithAuth()
		.get('/items', {
			username,
			password,
		})
		.then((res) => {
			dispatch({ type: GET_ITEMS_SUCCESS });
		})
		.catch((err) => {
			dispatch({ type: GET_ITEMS_ERROR });
		});
};

export const updateItem = (formState, name) => (dispatch) => {
	dispatch({ type: UPDATE_ITEM_START });
	axiosWithAuth()
		.put(`/items/${name}`, formState)
		.then((res) => {
			dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: UPDATE_ITEM_ERROR, payload: { error: err.message } });
		});
};

export const deleteItem = (id) => (dispatch) => {
	dispatch({ type: DELETE_ITEM_START });
	axiosWithAuth()
		.delete(`/items/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_ITEM_SUCCESS });
		})
		.catch((err) => {
			dispatch({ type: DELETE_ITEM_ERROR });
		});
};
