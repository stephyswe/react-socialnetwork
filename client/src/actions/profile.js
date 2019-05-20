import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, UPDATE_PROFILE, PROFILE_ERROR } from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
	try {
		const res = await axios.get('/api/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
	try {
		// Since we sending data we need config
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.post('/api/profile', formData, config);

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});

		// Display Update if edit is true
		dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

		// Creating new profile, then redirect to dashboard
		if (!edit) {
			history.push('/dashboard');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add Experience
export const addExperience = (formData, history) => async dispatch => {
	try {
		// Since we sending data we need config
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.put('/api/profile/experience', formData, config);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data
		});

		// Display Update
		dispatch(setAlert('Experience Added', 'success'));

		// Redirect to dashboard
		history.push('/dashboard');
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
	try {
		// Since we sending data we need config
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.put('/api/profile/education', formData, config);

		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data
		});

		// Display Update
		dispatch(setAlert('Education Added', 'success'));

		// Redirect to dashboard
		history.push('/dashboard');

	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
}