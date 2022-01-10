const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController')

router.get('/videos', videosController.getAll);
router.get('/videos/:id', videosController.getOne);
router.get('/videos/:id/comments', videosController.getComments);
router.post('/videos', videosController.createOne);

module.exports = router;


