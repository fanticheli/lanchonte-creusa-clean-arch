import { v4 as uuidv4 } from 'uuid';
import { ClienteProps } from './props/cliente.props';
import { Email } from '../valuesObjects/email';
import { CPF } from '../valuesObjects/cpf';

export class Cliente {
    private _id: string;
    private _nome: string;
    private _email: Email;
    private _CPF: CPF;

    constructor(clienteProps: ClienteProps) {
        this._id = clienteProps.id || uuidv4();
        this._nome = clienteProps.nome;
        this._email = new Email(clienteProps.email);
        this._CPF = new CPF(clienteProps.cpf);
    }

    get id(): string {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email.email;
    }

    get cpf(): string {
        return this._CPF.cpf;
    }
}