const express = require("express");
const {
	transactionDeleteCtrl,
	transactionCreateCtrl,
	transactionViewCtrl,
	transactionUpdateCtrl,
} = require("../../controllers/transactions/transactioncontroller");
const isLogin = require("../../middlewares/isLogin");
const transactionRoute = express.Router();

transactionRoute.post("/", isLogin, transactionCreateCtrl);

transactionRoute.get("/:id", isLogin, transactionViewCtrl);

transactionRoute.put("/:id", isLogin, transactionUpdateCtrl);

transactionRoute.delete("/:id", isLogin, transactionDeleteCtrl);

module.exports = transactionRoute;
