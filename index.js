const express = require('express')
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
const UserFormService = require('./services/userForm.service')
const service = new UserFormService()

app.listen(port, () => console.log('the server is running on port ' + port))
app.use(cors())
app.use(express.json())

app.post('/answers', async (req, res) => {
  try {
    const body = req.body;
    const newAnswer = await service.create(body);
    res.status(201).json(newAnswer);
  } catch (error) {
    next(error);
  }
});

app.get('/answers', async (req, res) => {
  try {
    const answers = await service.getAll()
    res.json(answers)
  } catch (error) {
    console.error(error)
  }
});