const express = require('express');
const app = express();
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
  response.render('index', { message: 'Hello there', pageTitle: 'Home' });
});

app.get('/works', function (request, response) {
  response.render('works');
});

app.get('/gallery', function (request, response) {
  response.render('gallery');
});

app.get('/about', function (request, response) {
  response.render('about');
});

app.get('*', function (request, response) {
  response.render('index');
});
app.listen(3010);
