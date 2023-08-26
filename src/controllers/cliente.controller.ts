import { ClienteOutput } from "../adapters/cliente";
import { ClienteProps } from "../entities/props/cliente.props";
import { IClienteGateway } from "../interfaces";
import { ClienteUseCases } from "../usecases/cliente";

export class ClienteController {
	static async BuscarTodosClientes(clienteGatewayInterface: IClienteGateway): Promise<ClienteOutput[] | null> {
		return await ClienteUseCases.BuscarTodosClientes(clienteGatewayInterface);
	}

    static async CriarCliente(clienteGatewayInterface: IClienteGateway, clienteProps: ClienteProps): Promise<ClienteOutput> {
		try {
			return await ClienteUseCases.CriarCliente(clienteGatewayInterface, clienteProps);
		} catch (error) {
			throw error;
		}
		
	}
}
