import { Link, useParams } from "react-router-dom";
import AllTransactions from "./AllTransactions";
import { React, useContext, useEffect } from "react";
import {
	AccountContextProvider,
	accountContext,
} from "../context/AccountContext/AccountContext";

export default function AccountDetails() {
	const { id } = useParams();

	const { getAccountDetail, account } = useContext(accountContext);
	useEffect(() => {
		getAccountDetail(id);
	}, [id]);

	const account_balance = account?.data?.initialBalance;
	var expense = 0,
		income = 0;

	const inside = account?.data?.transactions.map((transaction) => {
		if (transaction?.transactionType === "Deposit") {
			income += transaction?.amount;
		} else {
			expense += transaction?.amount;
		}
	});

	return (
		<>
			<div className="bg-gray-50 pt-12 sm:pt-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{account?.data?.name}
						</h2>
						<p className="mt-3 text-xl text-gray-500 sm:mt-4">
							{account?.data?.notes}
						</p>
					</div>
				</div>
				<div className="mt-10 bg-white pb-12 sm:pb-16">
					<div className="relative">
						<div className="absolute inset-0 h-1/2 bg-gray-50" />
						<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mx-auto max-w-4xl">
								<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
									<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
										<dt className=" mt-2 text-lg font-medium leading-6 text-gray-500">
											Total Balance
										</dt>
										<dd className=" text-5xl font-bold tracking-tight text-indigo-600">
											$ {account_balance}
										</dd>
									</div>
									<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
										<dt className=" mt-2 text-lg font-medium leading-6 text-gray-500">
											Total Expenses
										</dt>
										<dd className=" text-5xl font-bold tracking-tight text-red-600">
											$ {expense}
										</dd>
										<Link
											// to={`/expenses-list/${accountID}`}
											className="  font-bold tracking-tight text-blue-600">
											View History
										</Link>
									</div>
									<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
										<dt className=" mt-2 text-lg font-medium leading-6 text-gray-500">
											Total Income
										</dt>
										<dd className=" text-5xl font-bold tracking-tight text-green-600">
											$ {income}
										</dd>
										<Link
											// to={`/income-list/${accountID}`}
											className="  font-bold tracking-tight text-blue-600">
											View History
										</Link>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AllTransactions
				transaction={account?.data?.transactions}
				account={account?.data}
			/>
		</>
	);
}
