export class MongoConnection {
	constructor() {}

	static start() {
		const mongoose = require("mongoose");
		mongoose
			.connect("mongodb://localhost:27017/lanchonete-creusa-clean-arch", {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("Conexão com o MongoDB estabelecida");
			})
			.catch((err: any) => {
				console.error("Erro ao conectar ao MongoDB:", err);
			});
	}
	
}
