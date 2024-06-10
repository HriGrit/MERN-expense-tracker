const express = require("express");
const {
	userRegisterCtrl,
	userDeleteCtrl,
	userProfileCtrl,
	userLoginCtrl,
	userUpdateCtrl,
} = require("../../controllers/users/usercontroller");
const isLogin = require("../../middlewares/isLogin");

const userRoute = express.Router();

userRoute.post("/register", userRegisterCtrl);

userRoute.get("/profile", isLogin, userProfileCtrl);

userRoute.post("/login", userLoginCtrl);

userRoute.delete("/delete/:id", isLogin, userDeleteCtrl);

userRoute.put("/update/:id", isLogin, userUpdateCtrl);

module.exports = userRoute;
