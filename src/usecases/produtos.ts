import { ProdutoOutput } from "../adapters/produto";
import { Produto } from "../entities/produto.entity";
import { ProdutoProps } from "../entities/props/produto.props";
import { IProdutoGateway } from "../interfaces/gateway/produto.gateway.interface";

export class ProdutoUseCases {
	static async CriarProduto(
		produtoGatewayInterface: IProdutoGateway,
		produtoProps: ProdutoProps
	): Promise<ProdutoOutput> {
		const produto = await ProdutoUseCases.BuscarProdutoPorDescricao(
			produtoGatewayInterface,
			produtoProps.descricao
		);

		if (produto) {
			throw new Error("Produto já cadastrado com essa descrição");
		}

		const novoProduto = new Produto(produtoProps);

		return produtoGatewayInterface.CriarProduto(novoProduto.object);
	}

	static async BuscarProdutoPorDescricao(
		produtoGatewayInterface: IProdutoGateway,
		descricao: string
	): Promise<ProdutoOutput | null> {
		return produtoGatewayInterface.BuscarProdutoPorDescricao(
			descricao
		);
	}

	static async BuscarProdutoPorCategoria(
		produtoGatewayInterface: IProdutoGateway,
		categoria: string
	): Promise<ProdutoOutput[]> {
		return produtoGatewayInterface.BuscarProdutoPorCategoria(
			categoria
		);
	}
}
