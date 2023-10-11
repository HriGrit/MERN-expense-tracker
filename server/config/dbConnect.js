const mongoose = require("mongoose");

const dbConnect = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://ayushsoam15:u8FGiPjvbH8B7mr@fullstack-blog.dubyfxl.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("DB connected");
	} catch (err) {
		console.log(err);
	}
};

module.exports = dbConnect;
