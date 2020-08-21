import axios from 'axios';

export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const logIn = (formState) => (dispatch) => {
	dispatch({ type: LOG_IN_START });
	axios
		.post(
			'https://african-marketplace-trackteam.herokuapp.com/api/auth/login',
			formState
		)
		.then((res) => {
			console.log('success!', res.data);
			dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
			localStorage.setItem('authToken', res.data.token);
		})
		.catch((err) => {
			console.log(err.message);
			dispatch({ type: LOG_IN_ERROR, payload: { error: err.message } });
		});
};
