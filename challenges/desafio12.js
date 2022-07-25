// 1. Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
db.produtos.updateMany({
  nome: { $nin: ["McChicken"] } }, { $addToSet: { ingredientes: "ketchup" } });
// 2. Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
