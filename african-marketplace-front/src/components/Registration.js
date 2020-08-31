import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { register } from '../actions/userActions';
import { useHistory } from 'react-router-dom';

function Form(props) {
	const history = useHistory();

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		password: '',
		username: '',
		passwordConfirmation: '',
		location: '',
		terms: true,
	});

	const [buttonDisabled, setButtonDisabled] = useState(true);

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		username: '',
		passwordConfirmation: '',
		location: '',
		terms: '',
	});

	const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.name === 'terms' ? e.target.checked : e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: '',
				});
			})
			.catch((err) => {
				console.log(err);

				setErrors({
					...errors,
					[e.target.name]: err.errors[0],
				});
			});
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		console.log('form submitted!');
		await props.register({
			email: formState.email,
			name: formState.name,
			username: formState.username,
			password: formState.password,
			location: formState.location,
		});
		history.push('/home');
		// setFormState({
		// 	name: '',
		// 	email: '',
		// 	username: '',
		// 	password: '',
		// 	passwordConfirmation: '',
		// 	location: '',
		// 	terms: true,
		// });
	};

	const inputChange = (e) => {
		e.persist();
		console.log('input changed!', e.target.value);
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		};

		validateChange(e);
		setFormState(newFormData);
	};

	const formSchema = yup.object().shape({
		name: yup.string().required('Name is a required field'),
		email: yup
			.string()
			.email('Must be a valid email')
			.required('Must include an email'),

		username: yup.string().required('Please choose a username'),

		password: yup.string().min(8).max(128),
		passwordConfirmation: yup.string().when('password', {
			is: (val) => val && val.length > 0,
			then: yup
				.string()
				.oneOf([yup.ref('password')], 'Both passwords need to be the same')
				.required(),
		}),

		location: yup.string().required('Please Include Location'),

		terms: yup.boolean().oneOf([true], 'Please agree to Terms and Conditions'),
	});

	useEffect(() => {
		formSchema.isValid(formState).then((isValid) => {
			setButtonDisabled(!isValid);
		});
	}, [formState, formSchema]);

	if (props.loading) {
		console.log('loading');
		return <span className='loading'>Loading...</span>;
	}

	return (
		<form onSubmit={formSubmit}>
			<h2>New Seller Registration!</h2>
			<p>Welcome! Please fill out the following information to continue.</p>
			{props.serverError ? <p className='error'>{props.serverError}</p> : null}

			<input
				id='name'
				type='text'
				name='name'
				value={formState.name}
				placeholder='name'
				onChange={inputChange}
				data-cy='name'
			/>
			{errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}

			<input
				id='username'
				type='text'
				name='username'
				value={formState.username}
				placeholder='Username'
				onChange={inputChange}
				data-cy='username'
			/>
			{errors.username.length > 0 ? (
				<p className='error'>{errors.username}</p>
			) : null}

			<input
				id='email'
				type='text'
				name='email'
				value={formState.email}
				placeholder='email'
				onChange={inputChange}
				data-cy='email'
			/>
			{errors.email.length > 0 ? <p className='error'>{errors.email}</p> : null}

			<input
				type='password'
				id='password'
				name='password'
				value={formState.password}
				placeholder='password'
				onChange={inputChange}
				data-cy='password'
			/>
			{errors.password.length > 0 ? (
				<p className='error'>{errors.password}</p>
			) : null}

			<input
				type='password'
				id='passwordConfirmation'
				name='passwordConfirmation'
				value={formState.passwordConfirmation}
				placeholder=' Confirm Password'
				onChange={inputChange}
				data-cy='passwordConfirmation'
			/>
			{errors.passwordConfirmation.length > 0 ? (
				<p className='error'>{errors.passwordConfirmation}</p>
			) : null}

			<input
				type='text'
				id='location'
				name='location'
				value={formState.location}
				placeholder='Location'
				onChange={inputChange}
				data-cy='location'
			/>
			{errors.location.length > 0 ? (
				<p className='error'>{errors.location}</p>
			) : null}

			<label htmlFor='terms' className='terms'>
				<input
					type='checkbox'
					id='terms'
					name='terms'
					checked={formState.terms}
					onChange={inputChange}
					data-cy='terms'
				/>
				Terms and Conditions
				{errors.terms.length > 0 ? (
					<p className='error'>{errors.terms}</p>
				) : null}
			</label>
			<button disabled={buttonDisabled} type='submit'>
				Submit
			</button>
		</form>
	);
}

const mapStateToProps = (state) => {
	return {
		serverError: state.user.error,
		loading: state.user.loading,
	};
};

export default connect(mapStateToProps, { register })(Form);
