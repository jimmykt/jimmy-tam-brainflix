const fs = require('fs');
const uniqid = require('uniqid');

const dataPath = './data/videos.json';

function readData() {
  const videosFile = fs.readFileSync(dataPath);
  const videosData = JSON.parse(videosFile);
  return videosData;
}

const getAll = () => {
  return readData();
};

const getById = (id) => {
  const videosData = readData();
  return videosData.find((video) => id === video.id);
};

const getComments = (id) => {
  const videosData = getById(id);
  const comments = videosData.comments;
  console.log(comments);
  return comments;
}

module.exports = {
  getAll,
  getById,
  getComments,
}
