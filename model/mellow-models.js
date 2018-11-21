const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM rooms JOIN furniture ON furniture.rooms_id = rooms.id`);
};

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM rooms
    JOIN furniture
    ON furniture.rooms_id = rooms.id
    WHERE rooms.id = $1
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
