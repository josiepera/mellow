const Mellow = require('../model/furniture-models');

const furnitureController = {};

furnitureController.index = (req, res) => {
  Mellow.findAll()
    .then(mellows => {
      res.json({
        message: 'ok',
        data: mellows,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

furnitureController.show = (req, res) => {
  Mellow.findById(req.params.id)
    .then(mellow => {
      res.json({
        message: 'ok',
        data: mellow,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = furnitureController;
