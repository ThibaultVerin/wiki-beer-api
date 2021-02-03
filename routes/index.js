const beerRoute = require('./beer');

module.exports = (app) => {
  app.use('/beer', beerRoute);
};
