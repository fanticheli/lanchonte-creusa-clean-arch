import express, { Request, Response } from "express";
import { PedidoController } from "../../controllers/pedido.controller";
import { PedidoRepositoryInMongo } from "../../external/mongo/repositories/pedido.repository";
import { ProdutoRepositoryInMongo } from "../../external/mongo/repositories/produto.repository";

const router = express.Router();
const pedidoRepositoryInMongo = new PedidoRepositoryInMongo();
const produtoRepositoryInMongo = new ProdutoRepositoryInMongo();

router.post("/checkout", async (req: Request, res: Response) => {
	await PedidoController.CriarPedido(
		pedidoRepositoryInMongo,
		produtoRepositoryInMongo,
		req.body
	)
		.then((response: any) => {
			res.status(201).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.get("/:id", async (req: Request, res: Response) => {
	await PedidoController.BuscarPedidoPorID(
		pedidoRepositoryInMongo,
		req.params.id
	)
		.then((response: any) => {
			res.status(200).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.get("/:id/status-pagamento", async (req: Request, res: Response) => {
	await PedidoController.BuscarPedidoPorID(
		pedidoRepositoryInMongo,
		req.params.id
	)
		.then((response: any) => {
			res.status(200).send({ statusPagamento: response.statusPagamento });
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.put("/:id/status-pagamento", async (req: Request, res: Response) => {
	const statusPagamento = req.body.statusPagamento;

	await PedidoController.AlterarStatusPagamentoPedido(
		pedidoRepositoryInMongo,
		req.params.id,
		statusPagamento
	)
		.then((response: any) => {
			res.status(200).send({ statusPagamento: response.statusPagamento });
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.put("/:id/status-pedido", async (req: Request, res: Response) => {
	const statusPedido = req.body.statusPedido;

	await PedidoController.AlterarStatusPedido(
		pedidoRepositoryInMongo,
		req.params.id,
		statusPedido
	)
		.then((response: any) => {
			res.status(200).send({ statusPedido: response.statusPedido });
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.get("/", async (req: Request, res: Response) => {
	await PedidoController.ListaPedidos(pedidoRepositoryInMongo)
		.then((response: any) => {
			res.status(200).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

module.exports = router;
