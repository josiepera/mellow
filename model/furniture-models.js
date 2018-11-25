const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM furniture_list`);
};

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM furniture_list
    WHERE furniture_list.id = $1
  `,
    [id]);
};

module.exports = mellowModels;
