const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController')

router.get('/', videosController.getAll);
router.get('/:id', videosController.getOne);
router.get('/:id/comments', videosController.getComments);
router.post('/', videosController.createOne);


module.exports = router;


