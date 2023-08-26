import { ProdutoOutput } from "../../adapters/produto";
import { ProdutoProps } from "../../entities/props/produto.props";

export interface IProdutoGateway {
    CriarProduto(produtoProps: ProdutoProps): Promise<ProdutoOutput>;
    BuscarProdutoPorDescricao(descricao: string): Promise<ProdutoOutput | null>;
    BuscarProdutoPorCategoria(categoria: string): Promise<ProdutoOutput[]>;
}