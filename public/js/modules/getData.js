// Get API data from rijksmuseum
export  function getData(filter) {
var maker = "";
if(location.hash){
console.log(location.hash);
maker = location.hash;
}

    // Start loading state
    document.querySelector(".loading").style.display = "block";
    var Addfilter;
    if(filter == undefined){
        Addfilter = "key=hkKbTt5W&ps=100";
    }
    else{
        Addfilter = filter;
    }
   return fetch('https://www.rijksmuseum.nl/api/nl/collection/?'+Addfilter+"&involvedMaker="+maker.replace('#', '')).then(function (response) {
        // The API call was successful!
        return response.json();
    })
    .then(function (data) {
        // This is the JSON from our response'
            return data;
    })
    .catch(function (err) {
        // There was an error
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error p").innerHTML = 'Something went wrong: '+err+'';
        console.warn('Something went wrong.', err);
    });
}