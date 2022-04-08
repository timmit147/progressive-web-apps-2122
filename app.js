// Require modules
require('dotenv').config();
const express = require('express');

// Fetch data from api
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

// Fetch API and render data inside ejs file
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

// Render offline page when on /offline
app.get('/offline', (req, res) => {
	res.render("offline");
});

// Render notfound when page not exsist
app.get('/notfound', (req, res) => {
	res.render("notfound");
});

// Fetch data with id from url and render homepage
app.get('/artist:id', async function (req, res) {
  fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&involvedMaker='+req.params.id+'&ps=100').then(function (jsonData) {
    fetchJson('https://www.rijksmuseum.nl/api/nl/collection?key=hkKbTt5W&ps=100').then(function (jsonData2) {
      const listNames = names(jsonData2);
      // If page is not in fetch render page not found
      console.log("test");
      console.log(listNames.includes(req.params.id));
      if((listNames.includes(req.params.id) == true)){
        res.render("index",{
          data: jsonData,
          names: listNames,
          id: req.params.id
        });
      }
      else{
        res.render("notfound");
      }
    });
  });
});

// If page got a error return error message
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

// Place all painters in a array
function names(data){
  let allPainters = [];

  data.artObjects.forEach(item => {
      allPainters.push(item.principalOrFirstMaker)
  })

  allPainters.sort(function (a, b) {
      return a.localeCompare(b);
  });

  return unique = [...new Set(allPainters)];
}

// Set port for localhost
app.set('port', process.env.PORT || 8000);

// Start localhost
const server = app.listen(app.get('port'), function () {
  console.log(`App gestart op poort: ${app.get('port')}`);
})