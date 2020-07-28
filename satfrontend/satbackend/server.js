const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const assignmentUrls = require('./api/assignment');
const studentUrls = require('./api/student');

dotenv.config();
mongoose.connect(
  process.env.DATABASE_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Database connected')
);

app.use(express.json());
app.use(cors());
app.use('/assignment', assignmentUrls);
app.use('/student', studentUrls);

app.listen(5000, () => {
  console.log('Server is running fine on Port 5000...');
});
