const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM rooms`);
};

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM rooms
    JOIN studio_furn
    ON rooms.studio_id = studio_furn.id
    WHERE rooms.id = $1
  `,
    [id]
  );

  mellowModels.create = rooms => {
    return db.one(
      `
       INSERT INTO rooms
       (type, url)
       VALUES ($/type/, $/url/)
       RETURNING *
      `, rooms);
  }



};

module.exports = mellowModels;
