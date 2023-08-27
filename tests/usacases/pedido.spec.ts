import { CategoriaEnum } from "../../src/common/enum/categoria-enum";
import { StatusPagamentoEnum } from "../../src/common/enum/status-pagamento-enum";
import { StatusPedidoEnum } from "../../src/common/enum/status-pedido-enum";
import { PedidoProps } from "../../src/entities/props/pedido.props";
import { ProdutoProps } from "../../src/entities/props/produto.props";
import { PedidoRepositoryInMemory } from "../../src/external/memory/pedido.repository";
import { ProdutoRepositoryInMemory } from "../../src/external/memory/produto.repository";
import { PedidoUseCases } from "../../src/usecases/pedido";
import { ProdutoUseCases } from "../../src/usecases/produtos";

describe("Pedido", () => {
	const produtoRepository = new ProdutoRepositoryInMemory();
	const pedidoRepository = new PedidoRepositoryInMemory();

	test("Deve criar um pedido", async () => {
		const produtoProps: ProdutoProps = {
			id: "1",
			descricao: "Produto 1",
			valor: 10,
			categoria: CategoriaEnum.LANCHE,
		};

		await ProdutoUseCases.CriarProduto(produtoRepository, produtoProps);

		const pedidoProps: PedidoProps = {
			produtos: ["1"],
			cliente: "Cliente 1",
			valorTotal: 0,
			numeroPedido: 0,
			statusPagamento: StatusPagamentoEnum.PENDENTE,
			statusPedido: StatusPedidoEnum.RECEBIDO,
		};

		const novoPedido = await PedidoUseCases.CriarPedido(
			pedidoRepository,
			produtoRepository,
			pedidoProps
		);

		expect(novoPedido).toBeDefined();
		expect(novoPedido.id).toBe("01");
		expect(novoPedido.produtos).toHaveLength(1);
		expect(novoPedido.valorTotal).toBe(10);
		expect(novoPedido.numeroPedido).toBe(1);
		expect(novoPedido.cliente).toBe("Cliente 1");
		expect(novoPedido.statusPagamento).toBe(StatusPagamentoEnum.PENDENTE);
		expect(novoPedido.statusPedido).toBe(StatusPedidoEnum.RECEBIDO);
	});

	test("Deve buscar um pedido por ID", async () => {
		const pedidoEncontrado = await PedidoUseCases.BuscarPedidoPorID(
			pedidoRepository,
			"01"
		);

		expect(pedidoEncontrado).toBeDefined();
		expect(pedidoEncontrado?.id).toBe("01");
		expect(pedidoEncontrado?.produtos).toHaveLength(1);
		expect(pedidoEncontrado?.valorTotal).toBe(10);
		expect(pedidoEncontrado?.numeroPedido).toBe(1);
		expect(pedidoEncontrado?.cliente).toBe("Cliente 1");
		expect(pedidoEncontrado?.statusPagamento).toBe(
			StatusPagamentoEnum.PENDENTE
		);
		expect(pedidoEncontrado?.statusPedido).toBe(StatusPedidoEnum.RECEBIDO);
	});

	test("Deve aprovar o pagamento de um pedido", async () => {
		const pedidoAprovado = await PedidoUseCases.AlterarStatusPagamentoPedido(
			pedidoRepository,
			"01",
			StatusPagamentoEnum.NEGADO
		);

		expect(pedidoAprovado).toBeDefined();
		expect(pedidoAprovado?.id).toBe("01");
		expect(pedidoAprovado?.produtos).toHaveLength(1);
		expect(pedidoAprovado?.valorTotal).toBe(10);
		expect(pedidoAprovado?.numeroPedido).toBe(1);
		expect(pedidoAprovado?.cliente).toBe("Cliente 1");
		expect(pedidoAprovado?.statusPagamento).toBe(
			StatusPagamentoEnum.NEGADO
		);
		expect(pedidoAprovado?.statusPedido).toBe(StatusPedidoEnum.RECEBIDO);
	});

	test("Deve alterar o status de um pedido", async () => {
		const pedidoEmPreparo = await PedidoUseCases.AlterarStatusPedido(
			pedidoRepository,
			"01",
			StatusPedidoEnum.PREPARACAO
		);

		expect(pedidoEmPreparo).toBeDefined();
		expect(pedidoEmPreparo?.id).toBe("01");
		expect(pedidoEmPreparo?.produtos).toHaveLength(1);
		expect(pedidoEmPreparo?.valorTotal).toBe(10);
		expect(pedidoEmPreparo?.numeroPedido).toBe(1);
		expect(pedidoEmPreparo?.cliente).toBe("Cliente 1");
		expect(pedidoEmPreparo?.statusPagamento).toBe(
			StatusPagamentoEnum.NEGADO
		);
		expect(pedidoEmPreparo?.statusPedido).toBe(StatusPedidoEnum.PREPARACAO);
	})

	test("Deve listar todos os pedidos", async () => {
		const pedidos = await PedidoUseCases.ListaPedidos(pedidoRepository);
		expect(pedidos).toHaveLength(1);
	});

});
