require('dotenv').config();
const express = require('express');

// Get data from api
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

// Use express
const app = express();

// Stel ejs in als template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Stel een static map in
app.use(express.static('public'));

app.get('/', function (req, res) {
  fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&involvedMaker=Rembrandt+van+Rijn').then(function (jsonData) {
    // console.log(jsonData.artObjects[0]);
    res.render("index",{
      data: jsonData,
    });
  });

});

app.set('port', process.env.PORT || 8000);


const server = app.listen(app.get('port'), function () {
  console.log(`App gestart op poort: ${app.get('port')}`);
})