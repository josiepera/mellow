const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM rooms`);
};

mellowModels.exploreAll = () => {
  return db.query(`SELECT * FROM explore`)
}

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM rooms
    JOIN rooms
    ON studio_furn.rooms_id = rooms.id
    WHERE studio_furn.id = $1
  `,
    [id]);
};

  mellowModels.create = rooms => {
    return db.one(
      `
       INSERT INTO rooms
       (type, url)
       VALUES ($/type/, $/url/)
       RETURNING *
      `, rooms);
};

module.exports = mellowModels;
