import { ProdutoAdapter, ProdutoOutput } from "../../adapters/produto";
import { Produto } from "../../entities/produto.entity";
import { ProdutoProps } from "../../entities/props/produto.props";
import { IProdutoGateway } from "../../interfaces/gateway/produto.gateway.interface";

export class ProdutoRepositoryInMemory implements IProdutoGateway {
	private produtos: Produto[] = [];

	async CriarProduto(produtoProps: ProdutoProps): Promise<ProdutoOutput> {
		const produto = new Produto(produtoProps);
		this.produtos.push(produto);
		return ProdutoAdapter.adaptJsonProduto(produto);
	}

	async BuscarProdutoPorDescricao(
		descricao: string
	): Promise<ProdutoOutput | null> {
		const produtoExistente = this.produtos.find(
			(produto) => produto.descricao === descricao
		);

		if (!produtoExistente) {
			return null;
		}

		return ProdutoAdapter.adaptJsonProduto(produtoExistente);
	}

	async BuscarProdutoPorCategoria(
		categoria: string
	): Promise<ProdutoOutput[]> {
		const protudosEncontrados = this.produtos.filter(
			(produto) => produto.categoria === categoria
		);
		return ProdutoAdapter.adaptJsonProdutos(protudosEncontrados);
	}

	//   async buscarProdutoPorID(id: string): Promise<ProdutoDTO> {
	//     return this.produtos.find((produto) => produto.id === id);
	//   }

	//   async editarProduto(editarProdutoDTO: EditarProdutoDTO): Promise<ProdutoDTO> {
	//     this.produtos.map((produto) => {
	//       if (produto.id === editarProdutoDTO.id) {
	//         produto.descricao = editarProdutoDTO.descricao;
	//         produto.categoria = editarProdutoDTO.categoria;
	//         produto.valor = editarProdutoDTO.valor;
	//       }
	//     });

	//     const produto = this.produtos.find(
	//       (produto) => produto.id === editarProdutoDTO.id,
	//     );

	//     return produto;
	//   }

	//   deletarProduto(id: string): void {
	//     this.produtos = this.produtos.filter((produto) => produto.id !== id);
	//   }
}
