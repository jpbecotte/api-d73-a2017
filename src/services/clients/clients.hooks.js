const Schema = require('feathers-schema');

const clientSchema = new Schema.Schema({
  name: { type: String, required: true },
  address_street: { type: String, },
  address_city: { type: String, },
  address_province: { type: String, },
  address_postal_code: { type: String, },
});

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [...clientSchema.hooks],
    update: [...clientSchema.hooks],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
