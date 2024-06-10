import { React, useContext, useState } from "react";
import { authContext } from "../context/AuthContext/AuthContext";
const Login = () => {
	const { loginUserAction } = useContext(authContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChangeInput = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		loginUserAction(formData);
	};

	console.log(authContext);

	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="w-fit">
				<p className="font-sans text-3xl font-semibold mb-4 text-center">
					Sign In Your Account
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
					<p className="mt-6">Password</p>
					<input
						value={password}
						onChange={onChangeInput}
						name="password"
						className=" border-2 w-96 p-2 mt-1 h-10 rounded-md"
						type="password"
						placeholder="*******"
					/>
					<button
						className=" bg-green-600 w-full mt-12 h-9 text-white text-sm rounded-lg"
						type="submit">
						Sign In
					</button>
				</form>
				<p className="mt-5 text-center">
					Dont have an account? Register{" "}
					<a
						className="text-green-500 underline hover:text-blue-500"
						href="/register">
						here
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
