import { ClienteOutput } from "../adapters/cliente";
import { Cliente } from "../entities/cliente.entity";
import { ClienteProps } from "../entities/props/cliente.props";
import { IClienteGateway } from "../interfaces";

export class ClienteUseCases {
  
	static async buscarClientePorCPF(
		clienteGatewayInterface: IClienteGateway,
		CPF: string
	): Promise<ClienteOutput | null> {
		return await clienteGatewayInterface.buscarClientePorCPF(CPF);
	}

	static async CriarCliente(
		clienteGatewayInterface: IClienteGateway,
		clienteProps: ClienteProps
	): Promise<ClienteOutput | null> {
		const novoCliente = new Cliente(clienteProps)

		return await clienteGatewayInterface.criarCliente(novoCliente.object);
	}

	static async BuscarTodosClientes(clienteGatewayInterface: IClienteGateway): Promise<ClienteOutput[] | null> {
		return await clienteGatewayInterface.buscarTodosClientes();
	}
}
