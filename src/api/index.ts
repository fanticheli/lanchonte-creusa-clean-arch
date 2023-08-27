export class LanchoneteCreusa {
	constructor() {}

	start() {
		const express = require("express");

		const app = express();
		app.use(express.json());
		const PORT = process.env.PORT || 3000;

		const indexRoutes = require("./routes/routes");
		const clienteRoutes = require("./routes/cliente");
		const produtosRoutes = require("./routes/produto");
		const pedidosRoutes = require("./routes/pedido");

		app.use("/api", indexRoutes);
		app.use("/api/clientes", clienteRoutes);
		app.use("/api/produtos", produtosRoutes);
		app.use("/api/pedidos", pedidosRoutes);

		app.listen(PORT, () => {
			console.log(`Lanchonete da Creusa app listening on port ${PORT}`);
		});
	}
}
