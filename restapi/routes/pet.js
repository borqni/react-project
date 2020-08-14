const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.pets.get);

router.post('/', auth(), controllers.pets.post);

router.delete('/:id', auth(), controllers.pets.delete);

module.exports = router;