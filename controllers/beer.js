const {
  getAllBeer,
  findById,
  postOneBeer,
  putOneBeer,
  deleteOneBeer,
} = require('../models/beer');

module.exports.handleBeerGetAll = async (req, res) => {
  const rawData = await getAllBeer();
  res.send(rawData);
};

module.exports.handleBeerGetOne = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleBeerPost = async (req, res) => {
  const {
    name,
    brand,
    country,
    price,
    type,
    description,
    advice,
    image_url,
  } = req.body;
  const data = await postOneBeer({
    name,
    brand,
    country,
    price,
    type,
    description,
    advice,
    image_url,
  });
  return res.status(201).send(data);
};

module.exports.handleBeerPutOne = async (req, res) => {
  const {
    name,
    brand,
    country,
    price,
    type,
    description,
    advice,
    image_url,
  } = req.body;
  const attribute = {
    name,
    brand,
    country,
    price,
    type,
    description,
    advice,
    image_url,
  };
  const data = await putOneBeer(req.params.id, attribute);
  res.send(data);
};

module.exports.handleBeerDeleteOne = async (req, res) => {
  await deleteOneBeer(req.params.id);
  res.sendStatus(204);
};
