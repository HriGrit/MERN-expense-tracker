const User = require("../../models/users/usersSchema");

const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const verifytoken = require("../../utils/verifytoken");
const getTokenFromHeader = require("../../utils/getTokenfromHeader");

const userRegisterCtrl = async (req, res) => {
	const { fullname, email, password } = req.body;
	const userFound = await User.findOne({ email });

	if (userFound) {
		return res.json("user exists");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedpassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		fullname,
		email,
		password: hashedpassword,
	});

	res.json({ message: "success", user_id: user._id });
};

const userLoginCtrl = async (req, res) => {
	const { email, password } = req.body;
	const userFound = await User.findOne({ email });

	if (!userFound) {
		return res.json("User Not Found");
	}

	const passwordcheck = await bcrypt.compare(password, userFound.password);
	if (passwordcheck) {
		return res.json({
			message: userFound,
			data: "success",
			token: generateToken(userFound._id),
		});
	} else {
		return res.json("Invalid Password");
	}
};

const userProfileCtrl = async (req, res) => {
	var user = null;
	if (req.user) {
		user = await User.findById(req.user).populate({
			path: "accounts",
			populate: {
				path: "transactions",
				model: "Transaction",
			},
		});
	} else {
		return res.json({ message: "User Not logged in" });
	}

	if (!user) {
		return res.json({ message: "User Not Found" });
	}

	return res.json({ state: "success", user_info: user });
};

const userDeleteCtrl = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.user);
		console.log("deleted");
	} catch (err) {
		console.log(err);
	}
};

const userUpdateCtrl = async (req, res) => {
	if (req.body.email) {
		const userfound = await User.findOne({ email: req.body.email });
		if (userfound) {
			return console.log("User already taken");
		}
	}
	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		const hashedpassowrd = await bcrypt.hash(req.body.password, salt);
		req.body.password = hashedpassowrd;
	}
	const user = await User.findByIdAndUpdate(req.user, req.body, {
		new: true,
		runValidators: true,
	});

	res.json({ status: "Update User", data: user });
};

module.exports = {
	userRegisterCtrl,
	userLoginCtrl,
	userDeleteCtrl,
	userProfileCtrl,
	userUpdateCtrl,
};
