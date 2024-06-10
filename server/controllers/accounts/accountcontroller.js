const User = require("../../models/users/usersSchema");
const Account = require("../../models/accounts/accountsSchema");

const accountCreateCtrl = async (req, res) => {
	const user = await User.findById(req.user);
	if (!user) {
		return console.log("No Login");
	}
	const { name, accountType, initialBalance, notes } = req.body;
	const account = await Account.create({
		name,
		accountType,
		initialBalance,
		notes,
		createdBy: user._id,
	});
	user.accounts.push(account._id);
	await user.save();
	res.json({ message: "account created", acc: account });
};

const accountUpdateCtrl = async (req, res) => {
	const { id } = req.params;
	const account = await Account.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	res.json(account);
};

const accountDeleteCtrl = async (req, res) => {
	const { id } = req.params;
	await User.findByIdAndDelete(id);
	res.json("Delete Account");
};

const accountViewCtrl = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const account = await Account.findById(id).populate("transactions");
		res.json({
			status: "success",
			data: account,
		});
	} catch (error) {
		res.json("ha");
	}
};

module.exports = {
	accountCreateCtrl,
	accountDeleteCtrl,
	accountUpdateCtrl,
	accountViewCtrl,
};
