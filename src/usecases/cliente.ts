import { ClienteOutput } from "../adapters/cliente";
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
		return await clienteGatewayInterface.criarCliente(clienteProps);
	}

	static async BuscarTodosClientes(clienteGatewayInterface: IClienteGateway): Promise<ClienteOutput[] | null> {
		return await clienteGatewayInterface.buscarTodosClientes();
	}
}
