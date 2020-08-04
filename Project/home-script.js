//images from Press Assets of Wizards of the Coast: https://dnd.wizards.com/pressassets
var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons

var prevButton = document.querySelector('#prevButton');
var nextButton = document.querySelector('#nextButton');

//counter
let counter = 1;
var size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';


//button event listeners
nextButton.addEventListener('click', function(){
    if (counter >= carouselImages.length - 1){
        return;
    }
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

//button event listeners
prevButton.addEventListener('click', function(){
    if (counter <= 0){
        return;
    }
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', function(){
    if (carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

});

//menu button links
document.getElementById("homeButton").addEventListener('click', function(){
    window.location.href = "./home.html"

});
document.getElementById("charButton").addEventListener('click', function(){
    window.location.href = "./characters.html"

});
document.getElementById("spellsButton").addEventListener('click', function(){
    window.location.href = "./spells.html"

});
document.getElementById("searchButton").addEventListener('click', function(){
    window.location.href = "./search.html"

});
