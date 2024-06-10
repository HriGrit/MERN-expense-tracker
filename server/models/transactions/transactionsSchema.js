const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		transactionType: {
			type: String,
			enum: ["Deposit", "Withdrawal"],
			required: true,
		},
		amount: {
			type: Number,
			requried: true,
		},
		cateogry: {
			type: String,
			enum: ["Food", "Transportation", "Shopping", "Others"],
		},
		fromUser: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
		],
		fromAccount: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Account",
				required: true,
			},
		],
		date: {
			type: Date,
			default: Date.now(),
		},
	},
	{ timestamps: true, toJSON: { virtuals: true } }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
