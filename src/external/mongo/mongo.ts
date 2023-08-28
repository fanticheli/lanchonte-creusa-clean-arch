export class MongoConnection {
	constructor() {}

	static start() {
		console.log("Iniciando conexão com o MongoDB");
		const mongoose = require("mongoose");
		
		mongoose
			.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/lanchonete-creusa', {
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
