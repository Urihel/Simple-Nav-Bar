var body = document.getElementById("body");
var marquee = document.createElement("marquee");
var ul = document.createElement("ul");

var newDiv1 = document.createElement("div");
var newDiv2= document.createElement("div");
var newDiv3 = document.createElement("div");



function createElement() {
    body.appendChild(newDiv1);
    //console.log(div);
    newDiv1.id = "nav-bar-bg";
    //console.log(newDiv1);
}
createElement();

function textPlayer() {
    var name = "Urihel Coleman";
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(marquee);
    //console.log(newDiv2);
    //console.log(marquee);
    newDiv2.id = "textSlider";
    //marquee.id= "marquee";
    marquee.innerText = name;
}
textPlayer();

function navHeader() {
    newDiv1.appendChild(newDiv3);
    newDiv3.id = "navHeader";
}
navHeader();
function addList() {
    newDiv3.appendChild(ul);
    
    for (i = 0; i <= 3; i += 1) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var listName = ["Home", "About", "Projects", "Contact"];        
        var anchorID = ["Home", "About", "Projects", "Contact"];
        var links = ["http://www.google.com","http://www.yahoo.com","http://www.bing.com","http://www.amazon.com"];
        ul.appendChild(li);
        li.id = "navMenu";
        a.id = anchorID[i];
        li.appendChild(a);
        a.innerText = listName[i];
        a.href = links[i];
    }
}
addList();





