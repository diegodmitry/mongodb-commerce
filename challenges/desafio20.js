// 1. Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.
db.produtos.update({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });
// 2. Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });