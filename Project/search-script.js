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




//search & GET links:
document.getElementById("racesButton").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/races"
    req.open("GET", getURL, true);

    var list = document.querySelectorAll("#resultsList li");
    for (var i = 0; item=list[i]; i++){
        item.parentNode.removeChild(item);
    };

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
    event.preventDefault();
});


document.getElementById("classesButton").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/classes"
    req.open("GET", getURL, true);

    var list = document.querySelectorAll("#resultsList li");
    for (var i = 0; item=list[i]; i++){
        item.parentNode.removeChild(item);
    };

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
    event.preventDefault();

});


document.getElementById("featuresButton").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/features"
    req.open("GET", getURL, true);

    var list = document.querySelectorAll("#resultsList li");
    for (var i = 0; item=list[i]; i++){
        item.parentNode.removeChild(item);
    };

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
    event.preventDefault();

});


document.getElementById("spellsearchButton").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/spells/"
    req.open("GET", getURL, true);

    var list = document.querySelectorAll("#resultsList li");
    for (var i = 0; item=list[i]; i++){
        item.parentNode.removeChild(item);
    };

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
    event.preventDefault();
});


document.getElementById("monstersButton").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/monsters"
    req.open("GET", getURL, true);

    var list = document.querySelectorAll("#resultsList li");
    for (var i = 0; item=list[i]; i++){
        item.parentNode.removeChild(item);
    };
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
    event.preventDefault();

});







document.getElementById("racesSearch").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/races/?name=";
    getURL += document.getElementById("races").value;
    req.open("GET", getURL, true);

    document.getElementById("searchResultDisplay").textContent = ""

    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400){
            var result = JSON.parse(req.responseText);
            console.log(result)
            if (result.results.length === 0){
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a race in D&D. Try searching again, or check out more information at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/'>D&D Beyond</a>."; 
            } else if (result.results[0].name.toLowerCase() === document.getElementById("races").value.toLowerCase()){
                document.getElementById("searchResultDisplay").innerHTML = "Yes! That is a race in D&D 5e! Check it out at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/'>D&D Beyond</a>.";
            } else {
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a race in D&D. Try searching again, or check out more information at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/'>D&D Beyond</a>.";
            }

        } else {
            console.log("Error in network request: " + request.statusText)
        }
    });
    req.send(null);
    event.preventDefault();

});



document.getElementById("classesSearch").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/classes/?name=";
    getURL += document.getElementById("classes").value;
    req.open("GET", getURL, true);

    document.getElementById("searchResultDisplay").textContent = ""

    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400){
            var result = JSON.parse(req.responseText);
            console.log(result)
            if (result.results.length === 0){
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a class in D&D. Try searching again, or check out more information at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/classes'>D&D Beyond</a>."; 
            } else if (result.results[0].name.toLowerCase() === document.getElementById("classes").value.toLowerCase()){
                document.getElementById("searchResultDisplay").innerHTML = "Yes! That is a class in D&D 5e! Check it out at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/classes'>D&D Beyond</a>.";
            } else {
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a class in D&D. Try searching again, or check out more information at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/classes'>D&D Beyond</a>.";
            }

        } else {
            console.log("Error in network request: " + request.statusText)
        }
    });
    req.send(null);
    event.preventDefault();

});


document.getElementById("spellsSearch").addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var getURL = "https://www.dnd5eapi.co/api/spells/?name=";
    getURL += document.getElementById("spells").value;
    req.open("GET", getURL, true);

    document.getElementById("searchResultDisplay").textContent = ""

    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400){
            var result = JSON.parse(req.responseText);
            console.log(result)
            if (result.results.length === 0){
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a spell in D&D. Try searching again, or check out more information at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/spells'>D&D Beyond</a>."; 
            } else if (result.results[0].name.toLowerCase() === document.getElementById("spells").value.toLowerCase()){
                document.getElementById("searchResultDisplay").innerHTML = "Yes! That is a spell in D&D 5e! Check it out at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/spells'>D&D Beyond</a>.";
            } else {
                document.getElementById("searchResultDisplay").innerHTML = "Whoops! Looks like that might not be a spell in D&D. Try searching again, or check out more information at at <a href='https://dnd.wizards.com/'>the official Wizards of the Coast site</a> or on <a href='https://www.dndbeyond.com/spells'>D&D Beyond</a>.";
            }

        } else {
            console.log("Error in network request: " + request.statusText)
        }
    });
    req.send(null);
    event.preventDefault();

});






