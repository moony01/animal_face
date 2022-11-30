const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('./index.html')
// })

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.use(express.static("views"));