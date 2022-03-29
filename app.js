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
  fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&involvedMaker=Rembrandt+van+Rijn&ps=100').then(function (jsonData) {
    fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&ps=100').then(function (jsonData2) {
    const listNames = names(jsonData2);
    res.render("index",{
      data: jsonData,
      names: listNames
    });
  });
});
});

app.get('/Abraham%20Roentgen', function (req, res) {
  fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&involvedMaker=Rembrandt+van+Rijn&ps=100').then(function (jsonData) {
    fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&ps=100').then(function (jsonData2) {
    const listNames = names(jsonData2);
    res.render("index",{
      data: jsonData,
      names: listNames
    });
  });
});
});


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


function names(data){
  let allPainters = [];

  data.artObjects.forEach(item => {
      allPainters.push(item.principalOrFirstMaker)
  })

  allPainters.sort(function (a, b) {
      return a.localeCompare(b); //using String.prototype.localCompare()
  });

  return unique = [...new Set(allPainters)];
}




app.set('port', process.env.PORT || 8000);


const server = app.listen(app.get('port'), function () {
  console.log(`App gestart op poort: ${app.get('port')}`);
})