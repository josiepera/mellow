const Mellow = require('../model/mellow-models');

const mellowController = {};

mellowController.index = (req, res) => {
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

mellowController.show = (req, res) => {
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

mellowController.add = (req, res) => {
  Mellow.add({
    host_title: req.body.host_title,
    
  })
    .then(mellow => {
      res.json({
        message: 'ok',
        data: res.locals.data,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = mellowController;
