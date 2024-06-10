import { React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { authContext } from "../context/AuthContext/AuthContext";
const Navbar = () => {
	const { logoutUserAction, userAuth } = useContext(authContext);
	const { id } = useParams();
	return (
		<div className="flex bg-blue-200 h-16 items-center bg-blue-950">
			<FontAwesomeIcon
				className="text-4xl ml-8 mr-4 text-purple-600"
				icon={faCoffee}
			/>
			{userAuth?.userAuth ? (
				<>
					<ul className="flex ml-5 space-x-4 space-x-11 text-white">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<button onClick={logoutUserAction}>
								<Link to="/">Logout</Link>
							</button>
						</li>
					</ul>
				</>
			) : (
				<>
					<ul className="flex ml-5 space-x-4 space-x-11 text-white">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</>
			)}
			{/* {id == userAuth?.data?.data?.id ? (
				<>
					<span className=" absolute right-9">
						<button className="h-11 w-48 text-white font-semibold text-s rounded-lg bg-purple-700">
							+ New Transaction
						</button>
					</span>
				</>
			) : (
				<>
					<ul className="flex ml-5 space-x-4 space-x-11 text-white">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</>
			)} */}
		</div>
	);
};

export default Navbar;
