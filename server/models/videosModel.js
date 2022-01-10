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
  const foundIndex = videosData.findIndex((video) => id === video.id)
  foundVideo.image = "http://localhost:" + process.env.PORT + "/images/image" + foundIndex + ".jpeg"
  return foundVideo;
};

const getComments = (id) => {
  const videosData = getById(id);
  const comments = videosData.comments;
  return comments;
}



// Create new Video
const createOne = ({ title, description, image }) => {
  const videoData = readData();

  const newVideo = {
      id: uniqid(),
      title,
      description,
      image,
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
