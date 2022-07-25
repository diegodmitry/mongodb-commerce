// 1. Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.
db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
// 2. Crie uma query que retorne o nome e descricaoSite de todos os documentos.
db.produtos.find({}, { nome: true, descricao: true, descricaoSite: true, _id: false });