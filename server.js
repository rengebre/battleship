const express = require('express');
const app = express();
const port = 8080;

// set template engine to ejs
app.set("view engine", 'ejs')

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.render('homepage');
});

app.listen(port, () => {
  console.log('Battleship server reporting for duty.')
});