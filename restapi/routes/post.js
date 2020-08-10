const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.posts.get);

router.post('/', auth(), controllers.posts.post);

router.delete('/:id', auth(), controllers.posts.delete);

module.exports = router;