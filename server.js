const express = require('express');
const app = express();
const port = 8080;

// set template engine to ejs
app.set("view engine", 'ejs')

// Middleware

// folder 'public' for static files
app.use(express.static('public'));

// Parsing response data (json & urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  //console.log(req);
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