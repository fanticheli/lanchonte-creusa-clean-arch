import { ClienteProps } from './props/cliente.props';
import { Email } from './valuesObjects/email';
import { CPF } from './valuesObjects/cpf';

export class Cliente {
    private _nome: string;
    private _email: Email;
    private _CPF: CPF;

    constructor(clienteProps: ClienteProps) {
        this._nome = clienteProps.nome;
        this._email = new Email(clienteProps.email);
        this._CPF = new CPF(clienteProps.cpf);
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

    get object(): ClienteProps {
        return {
            nome: this._nome,
            email: this._email.email,
            cpf: this._CPF.cpf
        }
    }
}