import {getData} from './getData.js' 
import {makeList} from './render.js'

// Get API data from rijksmuseum
export  function filterArtist(filter) {


    return fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=hkKbTt5W&ps=100').then(function (response) {
            // The API call was successful!
            return response.json();
        })
        .then(function (data) {
            // This is the JSON from our response'

            let allPainters = [];

            data.artObjects.forEach(item => {
                allPainters.push(item.principalOrFirstMaker)
            })

            allPainters.sort(function (a, b) {
                return a.localeCompare(b); //using String.prototype.localCompare()
            });

            let unique = [...new Set(allPainters)];

            document.getElementById('selectNumber').addEventListener('change', function() {
                window.location = '#'+this.value+'';
                    console.log('You selected: ', this.value);
                    getData("key=hkKbTt5W&ps=100&involvedMaker="+this.value.replace(/\s+/g, '+'))
                    .then(data=>{
                        makeList(data);
                    })
                    const menu = document.querySelector(".menu");
                    const menuButton = document.querySelector(".menuButton");
                    menu.classList.toggle("menuShow");
                    menuButton.classList.toggle("iconSwitch");

            });

            


            for(let i = 0; i < unique.length; i++) {
                var opt = unique[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                document.getElementById("selectNumber").appendChild(el);
                if(location.hash){
                    console.log(location.hash);
                    document.querySelector(".defaultOption").innerHTML = location.hash.replaceAll('#', '').replaceAll('%20', ' ');
                }
            }


        })
        .catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    
}