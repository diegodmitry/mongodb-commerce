// 1. Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.
db.produtos.update({ nome: "Cheddar McMelt" }, { $pop: { ingredientes: 1 } });
// 2. Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
