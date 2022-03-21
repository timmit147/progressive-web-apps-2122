import {getData} from './modules/getData.js' 
import {makeList} from './modules/render.js'
import {swipe} from './modules/swipe.js'
import {menu} from './modules/menu.js'
import {filterArtist} from './modules/filter.js'


// filter on hash
// locationHashChanged();

// Get API data and place it in list
getData().then(data=>{
  makeList(data);
})

// Swipe lijst
swipe();

// Open close menu
menu();


// Filter kustenaar
filterArtist();
