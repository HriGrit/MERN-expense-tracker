import React from "react";

import { AuthContextProvider } from "../context/AuthContext/AuthContext";

const transaction = () => {
	return (
		<div className="flex flex-col items-center h-full justify-center">
			<h1 className="text-4xl font-bold my-10">Add Transaction</h1>
			<div className="w-1/3 h-3/4 p-8 shadow-lg bg-blue-100">
				<form>
					<p>Name</p>
					<input
						className="w-full rounded-md h-8 mb-5 p-1 px-2"
						type="text"
					/>
					<p>Transaction Type</p>
					<select
						className="w-full rounded-md h-8 mb-5 p-1 px-2"
						type="text">
						<option value="Income">Income (+)</option>
						<option value="Expenses">Expense (-)</option>
					</select>
					<p>Amount</p>
					<input
						className="w-full rounded-md h-8 mb-5 p-1 px-2"
						type="number"
					/>
					<p>Transaction Category</p>
					<select
						className="w-full rounded-md h-8 mb-5 p-1 px-2"
						type="text">
						<option>Food</option>
						<option>Zomato</option>
					</select>
					<p>Date</p>
					<input
						className="w-full rounded-md h-8 mb-5 p-1 px-2"
						type="date"
					/>
					<p>Add Note</p>
					<input
						type="text"
						className="w-full h-24 rounded-md mb-5 p-1 px-2"
					/>
					<button className="h-11 w-full text-white font-semibold text-s rounded-lg bg-purple-700">
						Add New Transaction
					</button>
				</form>
			</div>
		</div>
	);
};

export default transaction;
