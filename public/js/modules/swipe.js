// Swipe items in list (swipe up and down)
export function swipe(){
  function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  
  let startY;
  let moveY; 
  let swipeAmounth = 0;
  const ul = document.querySelector('ul');
  const listItems = ul.getElementsByTagName('li');

  function ontouchstart(){
    startY = event.touches[0].clientY;
  }

  function  ontouchmove(){
    moveY = event.touches[0].clientY;

  }

  async function ontouchend(){
    if((startY-100 > moveY) && (swipeAmounth < listItems.length-1)){
      swipeAmounth++;
        // Loop through the NodeList object.
        for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].style.marginBottom = ""+(swipeAmounth * 100)+"vh";
        }
    }
    if((startY+100 < moveY) && (swipeAmounth > 0)){
      swipeAmounth--;
      for (let i = 0; i <= listItems.length - 1; i++) {
        listItems[i].style.marginBottom = ""+(swipeAmounth * 100)+"vh";
    }
    }
  }
  document.querySelector("ul").ontouchstart = ontouchstart;
  document.querySelector("ul").ontouchmove = ontouchmove;
  document.querySelector("ul").ontouchend = ontouchend;

}
