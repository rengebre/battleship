const express = require('express');
const app = express();
const port = 8080;

// set template engine to ejs
app.set("view engine", 'ejs')

app.use(express.static('public'));


app.get("/", (req, res) => {
  // console.log(req.body);
  res.render('homepage');
});

app.get('/new-game', (req, res) => {
  res.render('newGame');
});

app.get('/scores', (req, res) => {
  res.render('leaderboard');
});

app.listen(port, () => {
  console.log('Battleship server reporting for duty.')
});