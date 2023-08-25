import { Pedido } from "../../src/entities/pedido.entity";

describe('Pedido', () => {
  it('should be defined', () => {
    expect(true).toBeDefined();
  });

    it('Create a new Pedido', () => {
        const pedidoProps = {
            id: 0,
            produtos: ['1', '2'],
            cliente: '1'
        }

        const pedido = new Pedido(pedidoProps);
        expect(pedido).toBeInstanceOf(Pedido);
        expect(pedido.id).toBe(0);
        expect(pedido.produtos.length).toBe(2);
        expect(pedido.cliente).toBe('1');
    })
})