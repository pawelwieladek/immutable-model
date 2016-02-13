export default class Model {
  constructor() { }

  createProperty(key, value) {
    const symbol = Symbol();
    this[symbol] = value;
    Object.defineProperty(this, key, {
      get: function() {
        return this[symbol];
      },
      set: function(value) {
        throw new Error(`Cannot modify immutable property '${key}'`);
      }
    });
  }

  createProperties(obj) {
    // todo: verify typeof obj === "object"
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.createProperty(key, obj[key]);
      }
    }
  }

  // todo: provide update(obj: Object)
}
