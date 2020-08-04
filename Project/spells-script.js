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


var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/spells/"
    req.open("GET", getURL, true);
    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400){
            var result = JSON.parse(req.responseText);
            console.log(result)
            var list = document.getElementById("resultsList");
            for (var i = 0; i < result.results.length; i++){
                var addItem = document.createElement("li");
                addItem.textContent = result.results[i].name;
                list.appendChild(addItem);
            }
        } else {
            console.log("Error in network request: " + request.statusText)
        }
    });
    req.send(null);



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


var damageSpells = document.querySelectorAll('.damageList li');
var controlSpells = document.querySelectorAll('.controlList li');
var utilitySpells = document.querySelectorAll('.utilityList li');
sortArr(nameComparator, damageSpells);
sortArr(nameComparator, controlSpells);
sortArr(nameComparator, utilitySpells);