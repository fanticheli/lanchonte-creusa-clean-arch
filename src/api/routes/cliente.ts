import express, { Request, Response } from "express";
import { ClienteController } from "../../controllers/cliente.controller";
import { ClienteRepositoryInMemory } from "../../external/memory/cliente.repository";
import { ClienteRepositoryInMongo } from "../../external/mongo/repositories/cliente.repository";

const router = express.Router();
const clienteRepositoryInMongo = new ClienteRepositoryInMongo();

router.get("/", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	res.json(
		await ClienteController.BuscarTodosClientes(clienteRepositoryInMongo)
	);
});

router.post("/", async (req: Request, res: Response) => {
	await ClienteController.CriarCliente(clienteRepositoryInMongo, req.body)
		.then((response: any) => {
			res.status(201).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ success: false, message: err });
		});
});

module.exports = router;
