import { ProdutoOutput } from "../../../adapters/produto";
import { ProdutoProps } from "../../../entities/props/produto.props";
import { IProdutoGateway } from "../../../interfaces/gateway/produto.gateway.interface";
import { ProdutoMongo } from "../model/produto";

export class ProdutoRepositoryInMongo implements IProdutoGateway {
	private _model;

	constructor() {
		this._model = ProdutoMongo;
	}

	async CriarProduto(novoProduto: ProdutoProps): Promise<ProdutoOutput> {
		return this._model.create(novoProduto);
	}

	async BuscarProdutoPorDescricao(descricao: string): Promise<ProdutoOutput | null> {
		return this._model.findOne({ descricao });
	}

	async BuscarProdutoPorCategoria(categoria: string): Promise<ProdutoOutput[]> {
		return this._model.find({ categoria });
	}
}
