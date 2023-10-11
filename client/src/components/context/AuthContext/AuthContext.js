import axios from "axios";
import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	FETCH_PROFILE_FAILED,
	FETCH_PROFILE_STARTED,
	FETCH_PROFILE_SUCCESS,
	LOGOUT,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
} from "./AuthActionType";
const isDevelopment = process.env.NODE_ENV === "development";
const apiEndpoint = isDevelopment
	? "http://localhost:1313/api/v1/users" // Use your local server in development
	: "https://mern-expense-tracker-jgr6.vercel.app/api/v1/users"; // Use your remote API in production

const { createContext, useReducer } = require("react");
export const authContext = createContext();

const INITIAL_STATE = {
	userAuth: JSON.parse(localStorage.getItem("userAuth")),
	error: null,
	loading: null,
	profile: null,
};

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_SUCCESS:
			localStorage.setItem("userAuth", JSON.stringify(payload));
			return {
				...state,
				loading: false,
				error: null,
				userAuth: payload,
			};
		case LOGIN_FAILED:
			return {
				...state,
				loading: false,
				error: payload,
				userAuth: null,
			};
		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				profile: payload,
			};
		case FETCH_PROFILE_FAILED:
			return {
				...state,
				error: payload,
				profile: null,
			};
		case FETCH_PROFILE_STARTED:
			return {
				...state,
				loading: true,
			};
		case LOGOUT:
			return {
				...state,
				profile: null,
				error: null,
				loading: false,
				userAuth: null,
			};
		case REGISTER_FAILED:
			return {
				...state,
				error: payload,
			};
		case REGISTER_SUCCESS:
			localStorage.setItem("userAuth", JSON.stringify(payload));
			return {
				...state,
				error: null,
				userAuth: payload,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const loginUserAction = async (formData) => {
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.post(
				`${apiEndpoint}/login`,
				formData,
				config
			);
			if (res?.data?.data === "success") {
				console.log("dispatched");
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res.data,
				});
			}
		} catch (error) {
			dispatch({
				type: LOGIN_FAILED,
				payload: error?.response?.data?.message,
			});
		}

		window.location.href = "/dashboard";
	};

	const fetchProfileAction = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${state?.userAuth?.token}`,
			},
		};
		try {
			const res = await axios.get(`${apiEndpoint}/profile`, config);
			if (res?.data?.state === "success") {
				dispatch({
					payload: res.data,
					type: FETCH_PROFILE_SUCCESS,
				});
			}
		} catch (error) {
			dispatch({
				payload: error?.message,
				type: FETCH_PROFILE_FAILED,
			});
		}
	};

	const logoutUserAction = async () => {
		localStorage.setItem("userAuth", null);
		dispatch({
			type: LOGOUT,
			payload: null,
		});
	};

	const registerUserAction = async (formData) => {
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.post(
				`${apiEndpoint}/register`,
				formData,
				config
			);
			if (res?.data?.message === "success") {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: res?.data,
				});
			}
		} catch (error) {
			dispatch({
				type: REGISTER_FAILED,
				payload: error.data,
			});
		}

		window.location.href = "/dashboard";
	};

	// console.log(state);

	return (
		<authContext.Provider
			value={{
				loginUserAction,
				userAuth: state,
				fetchProfileAction,
				profile: state?.profile,
				error: state?.error,
				logoutUserAction,
				registerUserAction,
			}}>
			{children}
		</authContext.Provider>
	);
};
