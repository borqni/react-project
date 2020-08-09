const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.pet.get);

router.post('/', auth(), controllers.pet.post);

router.delete('/:id', auth(), controllers.pet.delete);

module.exports = router;