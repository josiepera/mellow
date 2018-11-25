const express = require('express');
const router = express.Router()

const controller = require('../controller/furniture-controller')

router.get('/:id', controller.show);

router.route('/')
  .get(
    controller.index
  )

module.exports = router;
