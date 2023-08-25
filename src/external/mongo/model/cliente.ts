const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		cpf: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const ClienteMongo = mongoose.model("Cliente", ClienteSchema);
