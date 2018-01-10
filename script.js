/**
 *
 */

document.querySelector('.btn-scheme').addEventListener('click', function(){
    var x = document.createElement("IMG");
    x.setAttribute("src", "img.jpg");
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("Alt", "On motion: Something");
    document.getElementById("target").appendChild(x);
});

 function nextScheme(){
     //ToDO Something
 }
