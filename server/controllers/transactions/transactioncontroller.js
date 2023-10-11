const User = require("../../models/users/usersSchema");
const Account = require("../../models/accounts/accountsSchema");
const Transaction = require("../../models/transactions/transactionsSchema");

const transactionCreateCtrl = async (req, res) => {
	const userfound = await User.findById(req.user);
	const { name, transactionType, amount, cateogry, fromAccount } = req.body;
	if (!userfound) {
		return console.log("User not found");
	}
	const account = await Account.findById(fromAccount);
	if (!account) {
		return console.log("Account not found");
	}
	const transaction = await Transaction.create({
		name,
		transactionType,
		amount,
		cateogry,
		fromUser: req.user,
		fromAccount,
	});
	account.transactions.push(transaction);
	if (transactionType === "Deposit") {
		account.initialBalance += transaction.amount;
	} else {
		account.initialBalance -= transaction.amount;
	}
	account.save();
	res.json("Create Transaction");
};

const transactionAllViewCtrl = async (req, res) => {
	const transaction = await Transaction.find();
	console.log(transaction);
	res.json("get transaction");
};

const transactionViewCtrl = async (req, res) => {
	const { id } = req.params;
	const transaction = await Transaction.findById(id);
	console.log(transaction);
	res.json("get transaction");
};

const transactionUpdateCtrl = async (req, res) => {
	const { id } = req.params;
	await Transaction.findByIdAndUpdate(id);
	res.json("update transaction");
};

const transactionDeleteCtrl = async (req, res) => {
	const { id } = req.params;
	const trans = account.transaction.findById;
	await Transaction.findByIdAndDelete(id);
	res.json("delete transaction");
};

module.exports = {
	transactionCreateCtrl,
	transactionDeleteCtrl,
	transactionUpdateCtrl,
	transactionViewCtrl,
};
