import { createContext, useReducer } from "react";
import axios from "axios";
import {
	ACCOUNT_DETAIL_FAILED,
	ACCOUNT_DETAIL_ACCEPTED,
} from "./AccountActionType";
import { API_USER_URL } from "../../../utils/apiURL";

export const accountContext = createContext();

const INITIAL_STATE = {
	userAuth: JSON.parse(localStorage.getItem("userAuth")),
	account: null,
	accounts: [],
	loading: false,
	error: null,
};

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		// Details
		case ACCOUNT_DETAIL_ACCEPTED:
			return {
				...state,
				account: payload,
				loading: false,
				error: null,
			};
		case ACCOUNT_DETAIL_FAILED:
			return {
				...state,
				account: null,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
};

export const AccountContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const getAccountDetail = async (id) => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${state?.userAuth?.token}`,
					"Content-Type": "application/json",
				},
			};
			const res = await axios.get(`${API_USER_URL}/${id}`, config);
			console.log(res);
			if (res?.data?.status === "success") {
				dispatch({
					payload: res.data,
					type: ACCOUNT_DETAIL_ACCEPTED,
				});
			}
		} catch (error) {
			dispatch({
				type: ACCOUNT_DETAIL_FAILED,
				payload: error.data,
			});
		}
	};

	return (
		<accountContext.Provider
			value={{ getAccountDetail, account: state?.account }}>
			{children}
		</accountContext.Provider>
	);
};
