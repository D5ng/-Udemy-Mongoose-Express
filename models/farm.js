const mongoose = require("mongoose");
const { Schema } = mongoose;

const farmSchema = new Schema({
	name: {
		type: String,
		required: [true, "Farm must have a name!"],
	},
	city: {
		type: String,
	},
	email: {
		type: String,
		required: [true, "Email required"],
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;

// 모든 농장의 모든 상품을 한 번에 볼 수 있어야함.
// ^ 프로덕트 => 제품이름, 가격, 카테고리, 농장
// & 농장 => 농장이름, 도시, 이메일

// ? a => 토마토, 메론
// ? b => 키위, 수박
