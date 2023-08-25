import { ClienteAdapter, ClienteOutput } from "../../adapters/cliente";
import { Cliente } from "../../entities/cliente.entity";
import { ClienteProps } from "../../entities/props/cliente.props";
import { IClienteGateway } from "../../interfaces";

export class ClienteRepositoryInMemory implements IClienteGateway {
	private clientes: Cliente[] = [];

	async criarCliente(clienteProps: ClienteProps): Promise<Cliente> {
        const novoCliente = new Cliente(clienteProps)
		this.clientes.push(novoCliente);
		return novoCliente;
	}

	async buscarClientePorCPF(cpf: string): Promise<ClienteOutput | null> {
		const cliente = this.clientes.find((cliente) => cliente.cpf === cpf);
		return ClienteAdapter.adaptJsonCliente(cliente || null);
	}

	async buscarTodosClientes(): Promise<ClienteOutput[] | null> {
		return ClienteAdapter.adaptJsonClientes(this.clientes);
	}
}
