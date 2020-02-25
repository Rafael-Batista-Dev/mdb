class User {
  constructor(
    nome,
    nascimento,
    celular,
    email,
    cep,
    logradouro,
    bairro,
    cidade,
    estado,
    numeroEnd,
    senha,
    genero,
    admin,
    foto
  ) {
    this._nome = nome;
    this._nascimento = nascimento;
    this._celular = celular;
    this._email = email;
    this._cep = cep;
    this._logradouro = logradouro;
    this._bairro = bairro;
    this._cidade = cidade;
    this._estado = estado;
    this._numeroEnd = numeroEnd;
    this._senha = senha;
    this._genero = genero;
    this._admin = admin;
    this._foto = foto;
    this._registroData = new Date();
  }
}
