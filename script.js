/**
*
*/
var c = 0;
var list;
/*(function(){
    var url = "http://localhost:8080/archenemy/schemeList.json";

    $.getJSON(url, {format: "json"})
})*/
var r = $.getJSON("schemeList.json", function(data){
    console.log("Loading list ... ");
    list = data;
    list.sort(function(a,b){ return 0.5 - Math.random()});
}).done(function(){ console.log("Loaded"); }).fail(function(){ console.log("Error"); });


document.querySelector('.btn-scheme').addEventListener('click', function(){
    var e = document.getElementById("targetScheme");
    if(e){
        $('#targetScheme').remove();
    }
    var x = document.createElement("IMG");
    x.setAttribute("src", "imgs/"+list[c].imgPath);
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("id", "targetScheme");
    document.getElementById("target").appendChild(x);
    if (c < list.length){
        c += 1;
    } else {
        c = 0;
    }

});

//FUNCTIONS
function rmvScheme(){
    var x = document.getElementById("target");
    x.parentElement.removeChild(x);
}

function nxtScheme(){
    var x = document.createElement("IMG");
    x.setAttribute("src", "imgs/img.jpg");
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("Alt", "On motion: Something");
    document.getElementById("target").appendChild(x);
}

function shuffleDeck(selected){
    var deck = JSON.parse(selected);
}
