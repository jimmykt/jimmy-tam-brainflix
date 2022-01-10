const videosModel = require('../models/videosModel');

const getAll = (req, res) => {
  const videosData = videosModel.getAll();
  const strippedData = videosData.map((video, i) => {
    const newVideo = {}
    newVideo.id = video.id;
    newVideo.title = video.title
    newVideo.channel = video.channel
    newVideo.image = "http://localhost:" + process.env.PORT + "/images/image" + i + ".jpeg"
    return newVideo
  })
  res.json(strippedData);
}

const getOne = (req, res) => {
  const { id } = req.params;
  const foundVideo = videosModel.getById(id);
  if (!foundVideo) {
    return res.status(404).send('Unable to find video with id: ' + id);
  }
  res.json(foundVideo)
}

const getComments = (req, res) => {
  const { id } = req.params;
  const foundComments = videosModel.getComments(id);
  if (!foundComments) {
    return res.status(404).send('Unable to find comments for that video: ' + id);
  }
  res.json(foundComments)
}

const createOne = (req, res) => {
  if (!req.body.title) {
      return res.status(400).send("Title is required!");
  }

  if (!req.body.description) {
      return res.status(400).send("Description is reqiured!");
  }

  const newVideo = videosModel.createOne({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image

  });

  res.status(201).json(newVideo);
};

module.exports = {
  getAll,
  getOne,
  getComments,
  createOne,
};
