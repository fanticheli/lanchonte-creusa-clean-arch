import { ClienteOutput } from "../adapters/cliente";
import { Cliente } from "../entities/cliente.entity";
import { ClienteProps } from "../entities/props/cliente.props";
import { IClienteGateway } from "../interfaces";

export class ClienteUseCases {
	static async CriarCliente(
		clienteGatewayInterface: IClienteGateway,
		clienteProps: ClienteProps
	): Promise<ClienteOutput> {
		const novoCliente = new Cliente(clienteProps);
		const clienteExistente =
			await clienteGatewayInterface.BuscarClientePorCPF(novoCliente.cpf);

		if (clienteExistente) {
			throw new Error("Cliente já cadastrado");
		}

		return await clienteGatewayInterface.CriarCliente(novoCliente.object);
	}

	static async BuscarClientePorCPF(
		clienteGatewayInterface: IClienteGateway,
		CPF: string
	): Promise<ClienteOutput | null> {
		return await clienteGatewayInterface.BuscarClientePorCPF(CPF);
	}

	static async BuscarTodosClientes(
		clienteGatewayInterface: IClienteGateway
	): Promise<ClienteOutput[] | null> {
		return await clienteGatewayInterface.BuscarTodosClientes();
	}
}
