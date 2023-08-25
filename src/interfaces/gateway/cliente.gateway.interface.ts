import { ClienteOutput } from "../../adapters/cliente";
import { ClienteProps } from "../../entities/props/cliente.props";

export interface IClienteGateway {
	criarCliente(clienteProps: ClienteProps): Promise<ClienteOutput | null>;
	buscarClientePorCPF(CPF: string): Promise<ClienteOutput | null>;
	buscarTodosClientes(): Promise<ClienteOutput[] | null>;
}
