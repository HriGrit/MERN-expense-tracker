const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/users/userRoutes");
const accountRoute = require("./routes/accounts/accountRoutes");
const transactionRoute = require("./routes/transactions/transactionRoutes");

const dbConnect = require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: 'https://mern-expense-tracker-jgr6.vercel.app';,
		optionsSuccessStatus: 200,
	})
);
app.use((req, res, next) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		'https://mern-expense-tracker-jgr6.vercel.app';,
		"http://localhost:3000/"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

dbConnect();

app.use("/api/v1/users", userRoute);
app.use("/api/v1/accounts", accountRoute);
app.use("/api/v1/transactions", transactionRoute);

app.listen(1313, () => {
	console.log("Server is up");
});
