const videosModel = require('../models/videosModel');

const getAll = (req, res) => {
  const videosData = videosModel.getAll();
  strippedData = videosData.map((video) => {
    const newVideo = {}
    newVideo.id = video.id;
    newVideo.newTitle = video.title
    newVideo.channel = video.channel
    //newVideo.image = video.channel

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

module.exports = {
  getAll,
  getOne,
  getComments,
};
