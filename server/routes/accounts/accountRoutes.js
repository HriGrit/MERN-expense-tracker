const express = require("express");
const {
	accountCreateCtrl,
	accountDeleteCtrl,
	accountUpdateCtrl,
	accountViewCtrl,
} = require("../../controllers/accounts/accountcontroller");
const accountRoute = express.Router();
const isLogin = require("../../middlewares/isLogin");

accountRoute.post("/create", isLogin, accountCreateCtrl);

accountRoute.put("/update/:id", isLogin, accountUpdateCtrl);

accountRoute.delete("/delete/:id", isLogin, accountDeleteCtrl);

accountRoute.get("/:id", isLogin, accountViewCtrl);

module.exports = accountRoute;
