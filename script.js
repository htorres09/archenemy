/**
 *
 */

document.querySelector('.btn-scheme').addEventListener('click', function(){
  //var y = document.getElementById("target");
  //y.parentElement.removeChild(y);

  var x = document.createElement("IMG");
  x.setAttribute("src", "imgs/img.jpg");
  x.setAttribute("width", "100%");
  x.setAttribute("height", "100%");
  x.setAttribute("Alt", "On motion: Something");
  document.getElementById("target").appendChild(x);
});

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
