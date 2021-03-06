const express = require('express');
const router = express.Router()

const controller = require('../controller/explore-controller')

router.get('/:id', controller.show);

router.route('/')
  .get(
    controller.index
  )

router.route('/')
  .post(
    controller.create
  )

module.exports = router;
