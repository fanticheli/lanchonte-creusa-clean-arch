import { ClienteOutput } from "../../adapters/cliente";
import { ClienteProps } from "../../entities/props/cliente.props";

export interface IClienteGateway {
	CriarCliente(clienteProps: ClienteProps): Promise<ClienteOutput>;
	BuscarClientePorCPF(CPF: string): Promise<ClienteOutput | null>;
	BuscarTodosClientes(): Promise<ClienteOutput[] | null>;
}
