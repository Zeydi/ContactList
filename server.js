var express = require('express')
var app = express();
const PORT = process.env.PORT || 3000;

var path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(PORT,() => {
  console.log(`app is running at port ${PORT}` );
})
