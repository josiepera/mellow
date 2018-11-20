const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM rooms`);
};

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM rooms
    JOIN rooms
    ON studio_furn.rooms_id = rooms.id
    WHERE studio_furn.id = $1
  `,
    [id]
  );
};

module.exports = mellowModels;
