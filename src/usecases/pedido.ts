import { PedidoOutput } from "../adapters/pedido";
import { StatusPagamentoEnum } from "../common/enum/status-pagamento-enum";
import { StatusPedidoEnum } from "../common/enum/status-pedido-enum";
import { Pedido } from "../entities/pedido.entity";
import { PedidoProps } from "../entities/props/pedido.props";
import { IPedidoGateway } from "../interfaces/gateway/pedido.gateway.interface";
import { IProdutoGateway } from "../interfaces/gateway/produto.gateway.interface";

export class PedidoUseCases {
	static async CriarPedido(
		pedidoGatewayInterface: IPedidoGateway,
		produtoGatewayInterface: IProdutoGateway,
		pedidoProps: PedidoProps
	) {
		const novoPedido = new Pedido(pedidoProps);

		for (const produto of novoPedido.produtos) {
			const produtoEncontrado =
				await produtoGatewayInterface.BuscarProdutoPorID(produto);

			if (!produtoEncontrado) {
				throw new Error(`Produto: ${produto} não encontrado`);
			}

			novoPedido.valorTotal =
				novoPedido.valorTotal + produtoEncontrado.valor;
		}

		novoPedido.numeroPedido =
			await pedidoGatewayInterface.NumeroNovoPedido();

		return pedidoGatewayInterface.CriarPedido(novoPedido.object);
	}

	static async BuscarPedidoPorID(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string
	): Promise<PedidoOutput | null> {
		const pedidoEncontrado = await pedidoGatewayInterface.BuscarPedidoPorID(
			pedidoID
		);

		if (!pedidoEncontrado) {
			return null;
		}

		return pedidoEncontrado;
	}

	static async AlterarStatusPagamentoPedido(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string,
		statusPagamento: StatusPagamentoEnum
	): Promise<PedidoOutput> {
		if (!Object.values(StatusPagamentoEnum).includes(statusPagamento)) {
			throw new Error("Status de pedido inválido");
		}

		const pedidoEncontrado = await pedidoGatewayInterface.BuscarPedidoPorID(
			pedidoID
		);

		if (!pedidoEncontrado) {
			throw new Error("Pedido não encontrado");
		}

		pedidoEncontrado.statusPagamento = statusPagamento;

		if (statusPagamento === StatusPagamentoEnum.NEGADO) {
			pedidoEncontrado.statusPedido = StatusPedidoEnum.CANCELADO;
		} else if (statusPagamento === StatusPagamentoEnum.APROVADO) {
			pedidoEncontrado.statusPedido = StatusPedidoEnum.PREPARACAO;
		}

		return pedidoGatewayInterface.EditarPedido(pedidoEncontrado);
	}

	static async AlterarStatusPedido(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string,
		statusPedido: StatusPedidoEnum
	): Promise<PedidoOutput> {
		if (!Object.values(StatusPedidoEnum).includes(statusPedido)) {
			throw new Error("Status de pedido inválido");
		}

		const pedidoEncontrado = await pedidoGatewayInterface.BuscarPedidoPorID(
			pedidoID
		);

		if (!pedidoEncontrado) {
			throw new Error("Pedido não encontrado");
		}

		pedidoEncontrado.statusPedido = statusPedido;

		return pedidoGatewayInterface.EditarPedido(pedidoEncontrado);
	}

	static async ListaPedidos(
		pedidoGatewayInterface: IPedidoGateway
	): Promise<PedidoOutput[]> {
		return pedidoGatewayInterface.ListarPedidos();
	}
}
