import AccountSumaary from "./AccountSummary";
import AccountList from "./AccountList";
import { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext/AuthContext";

const AccountDashboard = () => {
	const { userAuth, fetchProfileAction, profile, error } =
		useContext(authContext);
	useEffect(() => {
		fetchProfileAction();
	}, []);
	const token = localStorage.getItem("userAuth");
	return (
		<>
			{token === "null" && error == null ? (
				<>
					<div
						className="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
						role="alert">
						<strong className="font-bold">Error!</strong>
						<span className="block sm:inline ">Error here</span>
					</div>
				</>
			) : (
				<>
					<AccountSumaary accounts={profile?.user_info?.accounts} />
					<AccountList accounts={profile?.user_info?.accounts} />
				</>
			)}
		</>
	);
};

export default AccountDashboard;
