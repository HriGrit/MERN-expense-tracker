import React from "react";
import Logo from "../../pic.jpeg";
const Home = () => {
	return (
		<div>
			<div className="flex mt-32 mx-5">
				<div>
					<p className=" bg-green-500 text-white w-fit px-3 mb-4 text-sm">
						PROJECT INCOME-EXPENSE TRACKER
					</p>
					<p className=" text-6xl font-bold mb-4">
						Track Your Income and Expense in One Place
					</p>
					<p className="mb-6">
						Worried where all your money goes each month? Tired of
						complicated finance softwares? Try our simple Income &
						Expense Tracking Application, the simple way to track
						your income and Expense in one place
					</p>
					<span>
						<button className="bg-green-400 text-white p-4 rounded-md mr-4">
							Request A Demo
						</button>
						<button className="border-2 p-4 rounded-md">
							Sign Up
						</button>
					</span>
				</div>
				<div className="px-3 w-screen">
					<img className="" src={Logo} alt="right" />
				</div>
			</div>
			<div className="mt-56 mx-5">
				<p className="bg-green-300 w-fit px-2 rounded-md">
					INCOME & EXPENSE Tracker
				</p>
				<p className="text-4xl font-bold py-5 text-4xl">
					Track Your Project Income and Expense
				</p>
				<p className="mb-48">
					Manage your money more effectively and make better financial
					decisions with this easy to use software
				</p>
			</div>
			<div className="flex">
				<div className="mx-12 w-1/2">
					<span className="flex">
						<svg
							className="bg-green-500 w-16 h-12 py-3 text-white rounded-lg"
							width={29}
							height={27}
							viewBox="0 0 24 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
								fill="currentColor"
							/>
						</svg>
						<div className="ml-8 w-fit mt-3">
							<p className=" text-xl font-bold mb-4">
								Understanding Your Spending Expense
							</p>
							<p>
								Stop wasting time loggin in expenses and
								tracking your income by hand. Use our software
								to manage all in one palce
							</p>
						</div>
					</span>
					<span className="flex mt-12">
						<svg
							className="bg-green-500 w-16 h-12 py-3 text-white rounded-lg"
							width={21}
							height={21}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z"
								fill="currentColor"
							/>
						</svg>
						<div className="ml-8 w-fit mt-3">
							<p className=" text-xl font-bold mb-4">
								Visualize Your Income and Expense Over Time
							</p>
							<p>
								Stop wasting time loggin in expenses and
								tracking your income by hand. Use our software
								to manage all in one palce
							</p>
						</div>
					</span>
					<span className="flex mt-12">
						<svg
							className="bg-green-500 w-16 h-12 py-3 text-white rounded-lg"
							width={21}
							height={21}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z"
								fill="currentColor"
							/>
						</svg>
						<div className="ml-8 w-fit mt-3">
							<p className=" text-xl font-bold mb-4">
								Stay on Top of Your Spending
							</p>
							<p>
								Take back control of your finances with our
								easy-to-use budgeting tool. Start for Free.
							</p>
						</div>
					</span>
				</div>
				<div className="w-1/2 mr-8">
					<img className="w-full h-full" src={Logo} alt="right" />
				</div>
			</div>
			<div className="flex-col text-center mt-48">
				<span className="flex justify-center items-center">
					<p className="bg-green-300 px-2 py-0.5 text-xs rounded-md">
						GET STARTED
					</p>
				</span>
				<h3 className="text-4xl font-bold my-4">
					Save Time and Money with the Income and Expense Tracker
				</h3>
				<p className="mb-6">
					Lorem Lorem Lorem Flex Lorem Flex Lorem Lorem 50 flex Lorem
					Lorem Flex I am Lorem Flex 50 I am 50 Lorem Lorem Lorem 50
					Lorem
				</p>
				<button className="bg-green-400 text-white p-4 rounded-md">
					Get Started
				</button>
			</div>
			<div className="my-16 mx-8">
				<img src={Logo} alt="img" />
			</div>
		</div>
	);
};

export default Home;
