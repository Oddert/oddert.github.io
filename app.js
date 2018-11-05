var express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , path        = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(
  PORT
, () => console.log(`${new Date().toLocaleTimeString('en-GB')}: Server initialised on port ${PORT}...`)
)
