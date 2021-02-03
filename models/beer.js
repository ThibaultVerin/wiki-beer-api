const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet.js');

const getAllBeer = async () => {
  return db.query('SELECT * FROM beer');
};

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query('SELECT * FROM beer WHERE id = ?', [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const postOneBeer = async (formData) => {
  return db
    .query(
      `INSERT INTO beer SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneBeer = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE beer SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneBeer = async (id) => {
  await db.query('DELETE FROM beer WHERE id = ?', id);
};

module.exports = {
  getAllBeer,
  findById,
  postOneBeer,
  putOneBeer,
  deleteOneBeer,
};
