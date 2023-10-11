import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Transaction from "./components/Transaction/Transaction";
import AccountDashboard from "./components/Dahboard/AccountDashboard";
import AccountDetail from "./components/Dahboard/AccountDetails";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/add-transactions/:id" element={<Transaction />} />
				<Route path="/dashboard" element={<AccountDashboard />} />
				<Route
					path="/account-details/:id"
					element={<AccountDetail />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
