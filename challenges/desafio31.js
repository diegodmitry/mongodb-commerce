db.produtos.find({ $expr: { $gt: ["$curtidas", "$vendidos"] } }, { nome: true, _id: false });
// Source: https://stackoverflow.com/questions/4442453/mongodb-query-condition-on-comparing-2-fields
