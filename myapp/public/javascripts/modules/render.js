import {swipe} from './swipe.js'
// Make a list with art
export function makeList(data) {
    // console.log(data.artObjects);
    const artList = data.artObjects;
    var i = 0;
    const ul = document.querySelector("ul")
    ul.innerHTML = '';
    for (var key in artList) {
        const li = document.createElement("li");
        const noImage = document.createElement("div");
        noImage.innerHTML = "Geen afbeelding";
        li.appendChild(noImage);
        const img = document.createElement("img");
        ul.appendChild(li);
        const amounth = -100 * i;
        // console.log(amounth);
        li.style.bottom = amounth+'vh';
        if(data.artObjects[key].webImage){
            img.src = data.artObjects[key].webImage.url.slice(0, -3)+"=s500";
        }
        else{
            noImage.style.display = "block";
        }

        li.appendChild(img);
        const title = document.createElement("h1");
        if(title){
            li.appendChild(title);
        }
        else{
            li.appendChild("Geen title");
        }
        li.appendChild(title);
        title.innerHTML = data.artObjects[key].title;
        i++;
        // Stop loading state
        document.querySelector(".loading").style.display = "none";
    }
    swipe();
}