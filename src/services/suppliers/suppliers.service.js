// Initializes the `suppliers` service on path `/suppliers`
const createService = require('feathers-nedb');
const createModel = require('../../models/suppliers.model');
const hooks = require('./suppliers.hooks');
const filters = require('./suppliers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'suppliers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/suppliers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('suppliers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
