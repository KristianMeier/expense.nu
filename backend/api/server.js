const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 5001

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(bodyParser.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

app.post('/submit', upload.single('receipt'), (req, res) => {
  const { date, amount, description } = req.body

  try {
    const receiptPath = req.file.path
    const dataPath = path.join(__dirname, 'data.json')
    let currentData = []
    if (fs.existsSync(dataPath)) {
      currentData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    }

    currentData.push({
      date: date,
      amount: amount,
      description: description,
      receipt: receiptPath,
    })

    fs.writeFileSync(dataPath, JSON.stringify(currentData, null, 2), 'utf8')

    res.json({ message: 'Data and receipt saved successfully!' })
  } catch (error) {
    console.error('Error:', error.message)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.get('/receipts', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'))
  res.json(data)
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' })
    }

    const users = JSON.parse(data)
    if (users[username] && users[username].password === password) {
      res.json({ success: true })
    } else {
      res.json({ success: false, message: 'Invalid username or password' })
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
