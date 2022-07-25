db.produtos.find(
  {},
  { nome: true, vendidos: true, _id: false }
).sort({ vendidos: -1 }).limit(1);

//linter não deixa o avaliador passar