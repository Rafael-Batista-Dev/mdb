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
    tipo,
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
    this._tipo = tipo;
    this._registroData = new Date();
  }
  get nome() {
    return this._nome;
  }
  get nascimento() {
    return this._nascimento;
  }
  get celular() {
    return this._celular;
  }
  get email() {
    return this._email;
  }
  get cep() {
    return this._cep;
  }
  get logradouro() {
    return this._logradouro;
  }
  get bairro() {
    return this._bairro;
  }
  get cidade() {
    return this._cidade;
  }
  get estado() {
    return this._estado;
  }
  get numeroEnd() {
    return this._numeroEnd;
  }
  get senha() {
    return this._senha;
  }
  get genero() {
    return this._genero;
  }
  get admin() {
    return this._admin;
  }
  get foto() {
    return this._foto;
  }

  get tipo() {
    return this._tipo;
  }

  set foto(value) {
    this._foto = value;
  }
}
