// 1. Crie uma query que faça a adição do valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } },
}, { $push: { tags: "muito sódio" } });
// 2. Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { nome: true, tags: true, _id: false });