// 1. Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
// 2. Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.find({}, { nome: true, criadoPor: true, _id: false });