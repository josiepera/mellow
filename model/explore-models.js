const db = require('../db/config');

const mellowModels = {};

mellowModels.findAll = () => {
  return db.query(`SELECT * FROM explore`);
};

mellowModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM explore
    WHERE explore.id = $1
  `,
    [id]);
};

  mellowModels.create = explore => {
    return db.one(
      `
       INSERT INTO explore
       (name, location, profile_url, url, title, size, description)
       VALUES ($/name/, $/location/, $/profile_url/, $/url/, $/title/, $/size/, $/description/)
       RETURNING *
      `, explore);
};

module.exports = mellowModels;
