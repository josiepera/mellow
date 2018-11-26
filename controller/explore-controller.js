const Mellow = require('../model/explore-models');

const exploreController = {};

exploreController.index = (req, res) => {
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

exploreController.show = (req, res) => {
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


exploreController.create = (req, res) => {
  Mellow.create({
    name: req.body.name,
    location: req.body.location,
    profile_url: req.body.profile_url,
    url: req.body.url,
    title: req.body.title,
    size: req.body.size,
    description: req.body.description
  })
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

module.exports = exploreController;
