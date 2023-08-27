import express, { Request, Response } from "express";
import { ProdutoRepositoryInMongo } from "../../external/mongo/repositories/produto.repository";
import { ProdutoController } from "../../controllers/produto.controller";

const router = express.Router();
const produtoRepositoryInMongo = new ProdutoRepositoryInMongo();

router.post("/", async (req: Request, res: Response) => {
	await ProdutoController.CriarProduto(produtoRepositoryInMongo, req.body)
		.then((response: any) => {
			res.status(201).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.get("/descricao/:descricao", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	res.json(
		await ProdutoController.BuscarProdutoPorDescricao(
			produtoRepositoryInMongo,
			req.params.descricao
		)
	);
});

router.get("/categoria/:categoria", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	res.json(
		await ProdutoController.BuscarProdutoPorCategoria(
			produtoRepositoryInMongo,
			req.params.categoria
		)
	);
});

router.put("/", async (req: Request, res: Response) => {
	await ProdutoController.EditarProduto(produtoRepositoryInMongo, req.body)
		.then((response: any) => {
			res.status(204).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

router.delete("/:id", async (req: Request, res: Response) => {
	await ProdutoController.DeletarProduto(
		produtoRepositoryInMongo,
		req.params.id
	)
		.then((response: any) => {
			res.status(201).send(response);
		})
		.catch((err: any) => {
			res.status(400).send({ message: err?.message });
		});
});

module.exports = router;
