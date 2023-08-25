import { Cliente } from "../../../entities/cliente.entity";
import { IClienteGateway } from "../../../interfaces";
import { ClienteOutput } from "../../../adapters/cliente";
import { ClienteMongo } from "../model/cliente";

export class ClienteRepositoryInMongo implements IClienteGateway {
	private _model;

	constructor() {
		this._model = ClienteMongo;
	}

	async criarCliente(novoCliente: Cliente): Promise<ClienteOutput | null> {
		return await this._model.create(novoCliente);
	}

	async buscarClientePorCPF(cpf: string): Promise<ClienteOutput | null> {
		return await this._model.findOne({ cpf });
	}

	async buscarTodosClientes(): Promise<ClienteOutput[] | null> {
		return await this._model.find();
	}
}
