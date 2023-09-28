export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get(name) {
    return this._name;
  }

  set name(user) {
    if (typeof (user) === 'string') {
      this._name = user;
    }
  }

  set code(dol) {
    if (typeof (dol) === 'string') {
      this._code = dol;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
