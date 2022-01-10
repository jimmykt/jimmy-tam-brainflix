const fs = require('fs');
const uniqid = require('uniqid');

const dataPath = './data/videos.json';

function readData() {
  const videosFile = fs.readFileSync(dataPath);
  const videosData = JSON.parse(videosFile);
  return videosData;
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data));
}

const getAll = () => {
  return readData();
};

const getById = (id) => {
  const videosData = readData()
  const foundVideo = videosData.find((video) => id === video.id)
  return foundVideo;
};

const getComments = (id) => {
  const videosData = getById(id);
  const comments = videosData.comments;
  return comments;
}



// Create new Video
const createOne = ({ title, description, image, channel, timestamp }) => {
  const videoData = readData();

  const newVideo = {
      id: uniqid(),
      title,
      description,
      image,
      channel,
      timestamp,
  }

  videoData.push(newVideo);
  writeData(videoData);
  return newVideo;
};

module.exports = {
  getAll,
  getById,
  getComments,
  createOne,
}
