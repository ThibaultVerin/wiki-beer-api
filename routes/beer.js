const asyncHandler = require('express-async-handler');
const beerRoute = require('express').Router();

const {
  handleBeerGetAll,
  handleBeerGetOne,
  handleBeerPost,
  handleBeerPutOne,
  handleBeerDeleteOne,
} = require('../controllers/beer');

beerRoute.get('/', asyncHandler(handleBeerGetAll));
beerRoute.get('/:id', asyncHandler(handleBeerGetOne));
beerRoute.post('/', asyncHandler(handleBeerPost));
beerRoute.put('/:id', asyncHandler(handleBeerPutOne));
beerRoute.delete('/:id', asyncHandler(handleBeerDeleteOne));

module.exports = beerRoute;
