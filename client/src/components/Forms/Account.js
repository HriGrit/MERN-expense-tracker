import { React, useContext, useState } from "react";
import { authContext } from "../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Account = () => {
	// const { AccountUserAction } = useContext(authContext);

	// const [formData, setFormData] = useState({
	// 	email: "",
	// 	password: "",
	// 	fullname: "",
	// });

	// const { email, password, fullname } = formData;

	// const onChangeInput = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	// const onSubmitHandler = (e) => {
	// 	e.preventDefault();
	// 	AccountUserAction(formData);
	// };

	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="w-fit">
				<p className="font-sans text-3xl font-semibold mb-4 text-center">
					Register Your Account for this User
				</p>
				<form onSubmit={onSubmitHandler}>
					<p>Email</p>
					<input
						name="email"
						onChange={onChangeInput}
						value={email}
						className="border-2 w-96 p-2 mt-1 h-10 rounded-md"
						placeholder="example@gmail.com"
						type="email"
					/>
					<p className="mt-6">Full Name</p>
					<input
						name="fullname"
						onChange={onChangeInput}
						value={fullname}
						className="border-2 w-96 p-2 mt-1 h-10 rounded-md"
						placeholder="example com"
						type="text"
					/>
					<p className="mt-6">Password</p>
					<input
						name="password"
						value={password}
						onChange={onChangeInput}
						className=" border-2 w-96 p-2 mt-1 h-10 rounded-md"
						type="password"
						placeholder="*******"
					/>
					<button
						type="submit"
						className=" bg-green-600 w-full mt-8 h-9 text-white text-sm rounded-lg">
						Account
					</button>
				</form>

				<p className="mt-5 text-center">
					Have an account? Sign Up{" "}
					<Link
						class="text-green-500 underline hover:text-blue-500"
						to="/login">
						here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Account;
