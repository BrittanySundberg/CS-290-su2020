//images from Press Assets of Wizards of the Coast: https://dnd.wizards.com/pressassets


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


/*sort functions to sort the unordered lists from the HTML document. That way the person
who does maintenance on the page doens't have to manually alphabetize when they add to 
or change any of the lists*/

//sort function I built from HW3, but modified a little bit.
function sortArr(comparator, array) {
    for (var i = 0; i < array.length; i++){
        var temp = array[i].textContent;
        var tempText = array[i].textContent;
        var prev = (i - 1);
      
    while (prev >= 0 && comparator(array[prev].textContent, temp) == false){
        array[prev +1].textContent = array[prev].textContent;
        prev = prev - 1;
    }
      array[prev + 1].textContent = tempText;
      
      
    }
}

//comparator for alphabetizing, based on one I included for HW3
function nameComparator(obj1, obj2) {
    if (obj1.toUpperCase() < obj2.toUpperCase()){
        return true;
    } else {
        return false;
    }
}


var utilityClasses = document.querySelectorAll('.utilityClasses li');
var supportClasses = document.querySelectorAll('.supportClasses li');
var avoidCombatClasses = document.querySelectorAll('.avoidCombatClasses li');
var burstDamageClasses = document.querySelectorAll('.burstDamageClasses li');
sortArr(nameComparator, utilityClasses);
sortArr(nameComparator, supportClasses);
sortArr(nameComparator, avoidCombatClasses);
sortArr(nameComparator, burstDamageClasses);



//resize all photos to the same width
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++){
    images[i].width = "200";
}