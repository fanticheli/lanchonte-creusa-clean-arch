import { StatusPagamentoEnum } from "../common/enum/status-pagamento-enum";
import { StatusPedidoEnum } from "../common/enum/status-pedido-enum";
import { PedidoProps } from "./props/pedido.props";

export class Pedido {
  private _id: number;
  private _produtos: string[];
  private _valorTotal: number;
  private _cliente: string;
  private _statusPagamento: StatusPagamentoEnum;
  private _statusPedido: StatusPedidoEnum;

  constructor(pedidoProps: PedidoProps) {
    this._id = pedidoProps.id;
    this._produtos = pedidoProps.produtos;
    this._valorTotal = 0;    
    this._cliente = pedidoProps.cliente;
    this._statusPagamento = StatusPagamentoEnum.PENDENTE;
    this._statusPedido = StatusPedidoEnum.PENDENTE;
  }

    get id(): number {
        return this._id;
    }

    get produtos(): string[] {
        return this._produtos;
    }

    get valorTotal(): number {
        return this._valorTotal;
    }

    get cliente(): string {
        return this._cliente;
    }

    get statusPagamento(): StatusPagamentoEnum {
        return this._statusPagamento;
    }

    get statusPedido(): StatusPedidoEnum {
        return this._statusPedido;
    }
  
}
