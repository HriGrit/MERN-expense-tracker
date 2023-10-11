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
		origin: ["https://mern-expense-tracker-five.vercel.app"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);

dbConnect();

app.use("/api/v1/users", userRoute);
app.use("/api/v1/accounts", accountRoute);
app.use("/api/v1/transactions", transactionRoute);

app.listen(1313, () => {
	console.log("Server is up");
});
