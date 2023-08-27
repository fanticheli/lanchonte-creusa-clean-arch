import { PedidoOutput } from "../adapters/pedido";
import { StatusPagamentoEnum } from "../common/enum/status-pagamento-enum";
import { StatusPedidoEnum } from "../common/enum/status-pedido-enum";
import { PedidoProps } from "../entities/props/pedido.props";
import { IPedidoGateway } from "../interfaces/gateway/pedido.gateway.interface";
import { IProdutoGateway } from "../interfaces/gateway/produto.gateway.interface";
import { PedidoUseCases } from "../usecases/pedido";

export class PedidoController {
	static async CriarPedido(
		pedidoGatewayInterface: IPedidoGateway,
		produtoGatewayInterface: IProdutoGateway,
		pedidoProps: PedidoProps
	): Promise<PedidoOutput> {
		try {
			return await PedidoUseCases.CriarPedido(
				pedidoGatewayInterface,
				produtoGatewayInterface,
				pedidoProps
			);
		} catch (error) {
			throw error;
		}
	}

	static async BuscarPedidoPorID(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string
	): Promise<PedidoOutput | null> {
		try {
			return await PedidoUseCases.BuscarPedidoPorID(
				pedidoGatewayInterface,
				pedidoID
			);
		} catch (error) {
			throw error;
		}
	}

	static async AlterarStatusPagamentoPedido(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string,
		statusPagamento: StatusPagamentoEnum
	): Promise<PedidoOutput | null> {
		try {
			return await PedidoUseCases.AlterarStatusPagamentoPedido(
				pedidoGatewayInterface,
				pedidoID,
				statusPagamento
			);
		} catch (error) {
			throw error;
		}
	}

	static async AlterarStatusPedido(
		pedidoGatewayInterface: IPedidoGateway,
		pedidoID: string,
		statusPedido: StatusPedidoEnum
	): Promise<PedidoOutput | null> {
		try {
			return await PedidoUseCases.AlterarStatusPedido(
				pedidoGatewayInterface,
				pedidoID,
				statusPedido
			);
		} catch (error) {
			throw error;
		}
	}

	static async ListaPedidos(
		pedidoGatewayInterface: IPedidoGateway
	): Promise<PedidoOutput[]> {
		try {
			return await PedidoUseCases.ListaPedidos(pedidoGatewayInterface);
		} catch (error) {
			throw error;
		}
	}
}
