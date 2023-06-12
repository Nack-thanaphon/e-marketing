const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [
  { id: 1, username: 'admin', password: '$2b$10$wjjaZ/5ZdDrlR1oio87TC.CJwD7bC9j4X5vCbekziXT0.C9il7j1u' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ username: user.username }, 'secretKey');
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
