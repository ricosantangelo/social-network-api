const express = require('express');
const mongoose = require('mongoose');
const { User, Thought } = require('./models');

const app = express();
app.use(express.json());

mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/api/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
