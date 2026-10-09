// PROJETO MONGODB - VELOTECH E-COMMERCE & LOGISTICA
// Pedro Henrique Lopes Gomes / Caio Esteves

// ===================== 1. BANCO E COLLECTION =====================

use db_velotech_analytics

// apaga a collection se ja existir (pra poder rodar de novo sem duplicar)
db.pedidos.drop()

db.createCollection("pedidos")


// ===================== 2. INSERINDO OS DADOS =====================
// cada documento = 1 pedido, com cliente, itens e entrega dentro dele
// valor_total = soma dos itens SEM o desconto
// datas no horario de Brasilia (-03:00)

db.pedidos.insertMany([
  {
    "_id": "PED-1001",
    "cliente": { "cliente_id": "CLI-01", "nome": "Pedro Vetin", "cidade": "São Paulo", "estado": "SP", "tags": ["vip", "frequente"] },
    "data_pedido": ISODate("2026-01-15T10:30:00-03:00"),
    "status": "entregue",
    "itens": [
      { "produto_id": "PRD-01", "nome_produto": "Tênis Esportivo Pro", "categoria": "Calçados", "preco": 350.00, "quantidade": 2 },
      { "produto_id": "PRD-02", "nome_produto": "Meia Performance", "categoria": "Acessórios", "preco": 30.00, "quantidade": 3 }
    ],
    "valor_total": 790.00,
    "desconto": 50.00,
    "forma_pagamento": "pix",
    "avaliacao": 5,
    "entrega": { "transportadora": "Loggi", "frete": 0.00, "prazo_previsto_dias": 3, "prazo_real_dias": 2 }
  },
  {
    "_id": "PED-1002",
    "cliente": { "cliente_id": "CLI-02", "nome": "Ana Clara Silva", "cidade": "Campinas", "estado": "SP", "tags": ["novo"] },
    "data_pedido": ISODate("2026-01-20T14:15:00-03:00"),
    "status": "entregue",
    "itens": [
      { "produto_id": "PRD-03", "nome_produto": "Smartwatch Fit", "categoria": "Eletrônicos", "preco": 450.00, "quantidade": 1 }
    ],
    "valor_total": 450.00,
    "desconto": 0.00,
    "forma_pagamento": "cartao_credito",
    "avaliacao": 4,
    "entrega": { "transportadora": "Correios", "frete": 25.00, "prazo_previsto_dias": 5, "prazo_real_dias": 7 }
  },
  {
    "_id": "PED-1003",
    "cliente": { "cliente_id": "CLI-03", "nome": "Lucas Fernandes", "cidade": "Rio de Janeiro", "estado": "RJ", "tags": ["frequente"] },
    "data_pedido": ISODate("2026-02-05T09:00:00-03:00"),
    "status": "entregue",
    "itens": [
      { "produto_id": "PRD-01", "nome_produto": "Tênis Esportivo Pro", "categoria": "Calçados", "preco": 350.00, "quantidade": 1 },
      { "produto_id": "PRD-04", "nome_produto": "Camisa DryFit", "categoria": "Vestuário", "preco": 120.00, "quantidade": 2 }
    ],
    "valor_total": 590.00,
    "desconto": 20.00,
    "forma_pagamento": "pix",
    "avaliacao": 5,
    "entrega": { "transportadora": "Jadlog", "frete": 35.00, "prazo_previsto_dias": 6, "prazo_real_dias": 6 }
  },
  {
    "_id": "PED-1004",
    "cliente": { "cliente_id": "CLI-01", "nome": "Pedro Vetin", "cidade": "São Paulo", "estado": "SP", "tags": ["vip", "frequente"] },
    "data_pedido": ISODate("2026-02-18T18:45:00-03:00"),
    "status": "entregue",
    "itens": [
      { "produto_id": "PRD-05", "nome_produto": "Bola Fut7 Profissional", "categoria": "Esportes", "preco": 180.00, "quantidade": 1 }
    ],
    "valor_total": 180.00,
    "desconto": 0.00,
    "forma_pagamento": "boleto",
    "avaliacao": 4,
    "entrega": { "transportadora": "Loggi", "frete": 15.00, "prazo_previsto_dias": 3, "prazo_real_dias": 3 }
  },
  {
    /* cancelado - sem avaliacao e sem forma_pagamento pra testar o $exists */
    "_id": "PED-1005",
    "cliente": { "cliente_id": "CLI-04", "nome": "Mariana Souza", "cidade": "Belo Horizonte", "estado": "MG", "tags": ["vip"] },
    "data_pedido": ISODate("2026-03-02T11:20:00-03:00"),
    "status": "cancelado",
    "itens": [
      { "produto_id": "PRD-03", "nome_produto": "Smartwatch Fit", "categoria": "Eletrônicos", "preco": 450.00, "quantidade": 2 }
    ],
    "valor_total": 900.00,
    "desconto": 100.00,
    "entrega": { "transportadora": "Correios", "frete": 30.00, "prazo_previsto_dias": 7 }
  },
  {
    "_id": "PED-1006",
    "cliente": { "cliente_id": "CLI-05", "nome": "Bruno Oliveira", "cidade": "Santos", "estado": "SP", "tags": ["novo"] },
    "data_pedido": ISODate("2026-03-15T16:10:00-03:00"),
    "status": "entregue",
    "itens": [
      { "produto_id": "PRD-04", "nome_produto": "Camisa DryFit", "categoria": "Vestuário", "preco": 120.00, "quantidade": 1 },
      { "produto_id": "PRD-06", "nome_produto": "Garrafa Térmica", "categoria": "Acessórios", "preco": 75.00, "quantidade": 2 }
    ],
    "valor_total": 270.00,
    "desconto": 10.00,
    "forma_pagamento": "pix",
    "avaliacao": 3,
    "entrega": { "transportadora": "Correios", "frete": 20.00, "prazo_previsto_dias": 4, "prazo_real_dias": 6 }
  },
  {
    _id: "PED-1007",
    cliente: { cliente_id: "CLI-02", nome: "Ana Clara Silva", cidade: "Campinas", estado: "SP", tags: ["novo"] },
    data_pedido: ISODate("2026-03-28T21:40:00-03:00"),
    status: "entregue",
    itens: [
      { produto_id: "PRD-04", nome_produto: "Camisa DryFit", categoria: "Vestuário", preco: 120.00, quantidade: 2 }
    ],
    valor_total: 240.00,
    desconto: 0.00,
    forma_pagamento: "cartao_credito",
    avaliacao: 4,
    entrega: { transportadora: "Loggi", frete: 15.00, prazo_previsto_dias: 3, prazo_real_dias: 4 }
  },
  {
    _id: "PED-1008",
    cliente: { cliente_id: "CLI-06", nome: "Juliana Rocha", cidade: "Curitiba", estado: "PR", tags: ["vip"] },
    data_pedido: ISODate("2026-04-06T13:25:00-03:00"),
    status: "entregue",
    itens: [
      { produto_id: "PRD-03", nome_produto: "Smartwatch Fit", categoria: "Eletrônicos", preco: 450.00, quantidade: 1 },
      { produto_id: "PRD-01", nome_produto: "Tênis Esportivo Pro", categoria: "Calçados", preco: 350.00, quantidade: 1 }
    ],
    valor_total: 800.00,
    desconto: 40.00,
    forma_pagamento: "cartao_credito",
    avaliacao: 5,
    entrega: { transportadora: "Jadlog", frete: 40.00, prazo_previsto_dias: 6, prazo_real_dias: 5 }
  },
  {
    _id: "PED-1009",
    cliente: { cliente_id: "CLI-03", nome: "Lucas Fernandes", cidade: "Rio de Janeiro", estado: "RJ", tags: ["frequente"] },
    data_pedido: ISODate("2026-04-19T10:05:00-03:00"),
    status: "entregue",
    itens: [
      { produto_id: "PRD-05", nome_produto: "Bola Fut7 Profissional", categoria: "Esportes", preco: 180.00, quantidade: 2 }
    ],
    valor_total: 360.00,
    desconto: 0.00,
    forma_pagamento: "pix",
    avaliacao: 2,
    entrega: { transportadora: "Correios", frete: 35.00, prazo_previsto_dias: 7, prazo_real_dias: 11 }
  },
  {
    _id: "PED-1010",
    cliente: { cliente_id: "CLI-01", nome: "Pedro Vetin", cidade: "São Paulo", estado: "SP", tags: ["vip", "frequente"] },
    data_pedido: ISODate("2026-05-03T20:05:00-03:00"),
    status: "entregue",
    itens: [
      { produto_id: "PRD-03", nome_produto: "Smartwatch Fit", categoria: "Eletrônicos", preco: 450.00, quantidade: 1 },
      { produto_id: "PRD-02", nome_produto: "Meia Performance", categoria: "Acessórios", preco: 30.00, quantidade: 2 }
    ],
    valor_total: 510.00,
    desconto: 30.00,
    forma_pagamento: "pix",
    avaliacao: 5,
    entrega: { transportadora: "Loggi", frete: 0.00, prazo_previsto_dias: 3, prazo_real_dias: 3 }
  },
  {
    _id: "PED-1011",
    cliente: { cliente_id: "CLI-07", nome: "Carla Mendes", cidade: "Salvador", estado: "BA", tags: ["novo"] },
    data_pedido: ISODate("2026-05-22T15:30:00-03:00"),
    status: "cancelado",
    itens: [
      { produto_id: "PRD-01", nome_produto: "Tênis Esportivo Pro", categoria: "Calçados", preco: 350.00, quantidade: 1 }
    ],
    valor_total: 350.00,
    desconto: 0.00,
    forma_pagamento: "boleto",
    entrega: { transportadora: "Jadlog", frete: 45.00, prazo_previsto_dias: 9 }
  },
  {
    _id: "PED-1012",
    cliente: { cliente_id: "CLI-04", nome: "Mariana Souza", cidade: "Belo Horizonte", estado: "MG", tags: ["vip"] },
    data_pedido: ISODate("2026-06-02T19:50:00-03:00"),
    status: "entregue",
    itens: [
      { produto_id: "PRD-04", nome_produto: "Camisa DryFit", categoria: "Vestuário", preco: 120.00, quantidade: 3 },
      { produto_id: "PRD-02", nome_produto: "Meia Performance", categoria: "Acessórios", preco: 30.00, quantidade: 2 }
    ],
    valor_total: 420.00,
    desconto: 20.00,
    forma_pagamento: "pix",
    avaliacao: 4,
    entrega: { transportadora: "Jadlog", frete: 30.00, prazo_previsto_dias: 5, prazo_real_dias: 5 }
  },
  {
    // ainda nao chegou, entao nao tem prazo_real_dias nem avaliacao
    _id: "PED-1013",
    cliente: { cliente_id: "CLI-05", nome: "Bruno Oliveira", cidade: "Santos", estado: "SP", tags: ["novo"] },
    data_pedido: ISODate("2026-06-14T11:10:00-03:00"),
    status: "enviado",
    itens: [
      { produto_id: "PRD-01", nome_produto: "Tênis Esportivo Pro", categoria: "Calçados", preco: 350.00, quantidade: 2 }
    ],
    valor_total: 700.00,
    desconto: 35.00,
    forma_pagamento: "cartao_credito",
    entrega: { transportadora: "Correios", frete: 20.00, prazo_previsto_dias: 4 }
  },
  {
    _id: "PED-1014",
    cliente: { cliente_id: "CLI-06", nome: "Juliana Rocha", cidade: "Curitiba", estado: "PR", tags: ["vip"] },
    data_pedido: ISODate("2026-06-27T09:45:00-03:00"),
    status: "pago",
    itens: [
      { produto_id: "PRD-03", nome_produto: "Smartwatch Fit", categoria: "Eletrônicos", preco: 450.00, quantidade: 1 },
      { produto_id: "PRD-05", nome_produto: "Bola Fut7 Profissional", categoria: "Esportes", preco: 180.00, quantidade: 1 }
    ],
    valor_total: 630.00,
    desconto: 30.00,
    forma_pagamento: "pix",
    entrega: { transportadora: "Loggi", frete: 25.00, prazo_previsto_dias: 4 }
  }
]);

// ===================== 3. PESQUISAS =====================

// ---- comparacao ----

//$gt pedidos acima de 500 reais
db.pedidos.find({valor_total: {$gt: 500}})

// $gte -> a partir de 590
db.pedidos.find({ "valor_total": { $gte: 590.00 } })

// $lt - desconto menor q 50
db.pedidos.find({ desconto: { $lt: 50 } });

// $lte  - ate 270 reais
db.pedidos.find({ valor_total: { $lte: 270 } })

// $eq  pagou no pix
db.pedidos.find({ forma_pagamento:{ $eq: "pix" } })

// $ne - tudo menos cancelado  
db.pedidos.find({ status: { $ne: "cancelado" } })

// ---- conjunto (in / nin) ----

// $in - clientes de SP ou RJ
db.pedidos.find({ "cliente.estado": { $in: ["SP","RJ"] } })

// $nin - nao pagou com boleto nem cartao
// (o PED-1005 aparece tambem pq ele nao tem forma_pagamento)
db.pedidos.find({ forma_pagamento: { $nin: ["boleto", "cartao_credito"] } })

// ---- logicos ----
//$or: entregue OU nota 5
db.pedidos.find({ $or: [ { status: "entregue" }, { avaliacao: 5 } ] })

// $and - mais de 200 reais E pix
db.pedidos.find({
  $and: [
      { valor_total: { $gt: 200 } },
      {forma_pagamento: "pix"}
  ]
})

// $nor - nem SP nem cancelado
db.pedidos.find({ $nor: [{ "cliente.estado": "SP" }, { status: "cancelado" }] })

// $not - avaliacao que nao seja <= 3
// OBS: traz tambem quem nao tem avaliacao!!
db.pedidos.find({ avaliacao: { $not: { $lte: 3 } } })

// ---- elemento ----
// $exists - so quem ja avaliou
db.pedidos.find({ avaliacao: { $exists: true } })


// $type - valor_total salvo como numero
db.pedidos.find({ valor_total: { $type: "number" } })

// ---- avaliacao ----

// $regex - nome com pedro ou silva ("i" = ignora maiuscula/minuscula)
db.pedidos.find({ "cliente.nome": { $regex: "pedro|silva", $options: "i" } })

// $mod - valor_total multiplo de 100
db.pedidos.find({ valor_total: { $mod: [ 100, 0 ] } })

// ---- arrays ----

// $all - cliente c/ as duas tags (vip e frequente)
db.pedidos.find({ "cliente.tags": { $all: ["vip", "frequente"] } })

// $size - pedidos com 2 itens
db.pedidos.find( { itens: { $size: 2 } } )

// $elemMatch - tem algum item de Calcados com preco >= 350
db.pedidos.find({ itens: { $elemMatch: { categoria: "Calçados", preco: { $gte: 350 } } } })

// ---- projecao, sort e limit ----

// 3 maiores pedidos (sem cancelados), mostrando so alguns campos
db.pedidos.find(
    { status: { $ne: "cancelado" } },
    { "cliente.nome": 1, valor_total: 1, status: 1 }
).sort({ valor_total: -1 }).limit(3)


// ===================== 4. AGREGACOES =====================

// AGREGACAO 1 - quanto cada categoria faturou
db.pedidos.aggregate([
    { $match: { status: { $ne: "cancelado" } } },
    { $unwind: "$itens" },  //separa os itens do array
    { $group: {
        _id: "$itens.categoria",
        faturamento: { $sum: { $multiply: ["$itens.preco", "$itens.quantidade"] } },
        unidades: { $sum: "$itens.quantidade" },
        pedidos: { $addToSet: "$_id" } // addToSet nao repete
    } },
    { $project: { faturamento: 1, unidades: 1, qtd_pedidos: {$size: "$pedidos"} } },
    { $sort: { faturamento: -1 } }
])

// AGREGACAO 2 - clientes que mais gastam
db.pedidos.aggregate([
    { $match: { status: { $ne: "cancelado" } } },
    {
        $group: {
            _id: "$cliente.nome",
            estado: { $first: "$cliente.estado" },
            qtd_pedidos: { $sum: 1 },
            total_gasto: { $sum: "$valor_total" },
            total_desconto: { $sum: "$desconto" },
            ticket_medio: { $avg: "$valor_total" },
            historico: { $push: { pedido: "$_id", valor: "$valor_total" } }
        }
    },
    { $addFields: {
        cliente: { $concat: ["$_id", " (", "$estado", ")"] },
        //so os pedidos acima de 500
        pedidos_acima_500: { $filter: { input: "$historico", as: "p", cond: { $gt: ["$$p.valor", 500] } } },
        // historico do maior p/ o menor
        historico: { $sortArray: { input: "$historico", sortBy: { valor: -1 } } }
    } },
    { $sort: { total_gasto: -1 } },
    { $limit: 5 }
])

// AGREGACAO 3 - entregas por transportadora (logistica)
// dias_atraso = prazo real - prazo previsto (se der mais que 0, atrasou)
db.pedidos.aggregate([
    { $match: { status: "entregue" } },
    { $project: {
        transportadora: "$entrega.transportadora",
        frete: "$entrega.frete",
        prazo_real: "$entrega.prazo_real_dias",
        avaliacao: 1,
        dias_atraso: { $subtract: ["$entrega.prazo_real_dias", "$entrega.prazo_previsto_dias"] }
    } },
    { $group: {
        _id: "$transportadora",
        entregas: { $sum: 1 },
        frete_medio: { $avg: "$frete" },
        prazo_medio: { $avg: "$prazo_real" },
        atraso_medio: { $avg: "$dias_atraso" },
        maior_atraso: { $max: "$dias_atraso" },
        nota_media: { $avg: "$avaliacao" }
    } },
    { $sort: { atraso_medio: -1 } }
])

// quantas entregas atrasaram em cada uma?
db.pedidos.aggregate([
    { $match: { status: "entregue" } },
    { $addFields: { dias_atraso: { $subtract: ["$entrega.prazo_real_dias", "$entrega.prazo_previsto_dias"] } } },
    { $match: { dias_atraso: { $gt: 0 } } },
    { $group: { _id: "$entrega.transportadora", atrasadas: { $sum: 1 } } },
    { $sort: { atrasadas: -1 } }
])


// ===================== 5. SERIE TEMPORAL =====================

// SERIE 1 - vendas por mes
db.pedidos.aggregate([
    { $match: { status: { $ne: "cancelado" } } },
    { $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$data_pedido", timezone: "-03:00" } },
        pedidos: { $sum: 1 },
        faturamento: { $sum: "$valor_total" },
        ticket_medio: { $avg: "$valor_total" },
        maior_pedido: { $max: "$valor_total" },
        menor_pedido: { $min: "$valor_total" }
    } },
    { $sort: { _id: 1 } }
])

// mesma serie mas salvando numa collection nova com $out
// o $out tem q ser a ultima etapa
db.pedidos.aggregate([
    { $match: { status: { $ne: "cancelado" } } },
    { $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$data_pedido", timezone: "-03:00" } },
        pedidos: { $sum: 1 },
        faturamento: { $sum: "$valor_total" }
    } },
    { $sort: { _id: 1 } },
    { $out: "vendas_mensais" }
])

db.vendas_mensais.find();

// SERIE 2 - pedidos por hora do dia
db.pedidos.aggregate([
    { $match: { status: { $ne: "cancelado" } } },
    { $group: {
        _id: { $hour: { date: "$data_pedido", timezone: "-03:00" } },
        pedidos: { $sum: 1 },
        faturamento: { $sum: "$valor_total" }
    } },
    { $sort: { _id: 1 } }
])


// ===================== 6. ATUALIZANDO E APAGANDO =====================
// deixamos no final pra nao mudar o resultado das consultas la de cima

// updateOne + $set -> o PED-1013 chegou no cliente
db.pedidos.updateOne(
  { _id: "PED-1013" },
  { $set: { status: "entregue", "entrega.prazo_real_dias": 6, avaliacao: 3 } }
)

// updateMany + $unset: cancelado nao tem entrega, entao tira o campo
db.pedidos.updateMany(
    { status: "cancelado" },
    { $unset: { entrega: "" } }
)

//conferindo
db.pedidos.findOne({ _id: "PED-1013" })
db.pedidos.find({ status: "cancelado" }, { entrega: 1 })

// deleteOne: apaga o PED-1011 (cancelado, cliente nunca mais comprou)
db.pedidos.deleteOne({_id: "PED-1011"})

db.pedidos.countDocuments()  // agora tem q dar 13