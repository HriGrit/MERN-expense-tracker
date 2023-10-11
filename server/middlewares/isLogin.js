const User = require("../models/users/usersSchema");
const getTokenFromHeader = require("../utils/getTokenfromHeader");
const verifytoken = require("../utils/verifytoken");

const isLogin = async (req, res, next) => {
	const token = getTokenFromHeader(req);
	const result = verifytoken(token);
	const userid = result.id;
	if (!userid) {
		return console.log("No Token");
	}
	const user = await User.findById(userid);

	if (!user) {
		return console.log("Invalid User");
	} else {
		req.user = userid;
		next();
	}
};

module.exports = isLogin;
