import { v4 as uuidv4 } from 'uuid';
import { CategoriaEnum } from "../../common/enum/categoria-enum";
import { ProdutoProps } from "./props/produto.props";

export class Produto {
  private _id: string;
  private _descricao: string;
  private _valor: number;
  private _categoria: CategoriaEnum;

  constructor(produtoProps: ProdutoProps) {
    this._id = produtoProps.id || uuidv4();
    this._descricao = produtoProps.descricao;
    this._valor = produtoProps.valor;
    this._categoria = produtoProps.categoria;
  }

    get id(): string {
        return this._id;
    }

    get descricao(): string {
        return this._descricao;
    }

    get valor(): number {
        return this._valor;
    }

    get categoria(): CategoriaEnum {
        return this._categoria;
    }
        
  
}
