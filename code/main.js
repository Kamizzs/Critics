let isMouseHover=false;
let random=document.getElementById("Randomizer");
let animes=document.getElementById("Animes");
let games=document.getElementById("VideoGames");
let movie=document.getElementById("Movies")
let SelectedTypes=[];


random.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    random.innerHTML = '<img src="images/icons/icons8-mélanger-48.png" >';
    console.log(isMouseHover);  
},false);

random.addEventListener("mouseover", function (event) {
    isMouseHover = true 
    random.innerText="Randomizer";
    console.log(isMouseHover);  
  }, false);

animes.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    animes.innerHTML = '<img src="images/icons/icons8-naruto-48.png" >';
    console.log(isMouseHover);  
},false);

animes.addEventListener("mouseover", function (event) {
    isMouseHover = true 
    animes.innerText="Animes";
    console.log(isMouseHover);  
  }, false);

games.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    games.innerHTML = '<img src="images/icons/icons8-manette-48.png" >';
    console.log(isMouseHover);  
},false);

games.addEventListener("mouseover", function (event) {
    isMouseHover = true 
    games.innerText="Video Games";
    console.log(isMouseHover);  
  }, false);

movie.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    movie.innerHTML = '<img src="images/icons/icons8-clap-48.png" >';
    console.log(isMouseHover);  
},false);

movie.addEventListener("mouseover", function (event) {
    isMouseHover = true 
    movie.innerText="Movies";
    console.log(isMouseHover);  
  }, false);


function ClickType(){
  document.querySelector(".button").onclick.style.bordercolor="Yellow";
}


