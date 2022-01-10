const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/videosRoutes');

require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));
app.use('/', videoRoutes);

app.listen(port, () => {
  console.log('App listening on port: ' + port); 
});
