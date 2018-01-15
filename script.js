/**
*
*/
var c = 0;
var list;

var r = $.getJSON("schemeList.json", function(data){
    console.log("Loading list ... ");
    list = data;
    list.sort(function(a,b){ return 0.5 - Math.random()});
}).done(function(){ console.log("Loaded"); }).fail(function(){ console.log("Error"); });

document.querySelector('.btn-scheme-next').addEventListener('click', function(){
    //Remove Scheme image
    var e = document.getElementById("targetScheme");
    if(e){
        $('#targetScheme').remove();
    }

    //Add Scheme Img
    var x = document.createElement("IMG");
    x.setAttribute("src", "imgs/"+list[c].imgPath);
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("id", "targetScheme");
    document.getElementById("target").appendChild(x);

    if(list[c].ongoing){
      var y = document.createElement("IMG");
      y.setAttribute("src", "imgs/"+list[c].imgPath);
      y.setAttribute("width", "25%");
      y.setAttribute("height", "100%");
      y.setAttribute("class", "img-ongoing");
      y.setAttribute("id", "trgt-ongoing-" + list[c]._id);
      document.getElementById("trgt-slide").appendChild(y);
    }

    //Add Scheme effect
    if(list[c].ongoing){
      //Create title for Ongoing Scheme
      var h = document.createElement("div");
      h.setAttribute("id", "ongoing-title" + list[c]._id);
      h.setAttribute("class", "effect-box");
      document.getElementById("trgt-ongoing").appendChild(h);
      h.innerHTML = list[c].title;
      //Append Ongoing Scheme Effect
      var s = document.createElement("div");
      s.setAttribute("class", "effect-x");
      s.setAttribute("id", "ongoing-" + list[c]._id);
      document.getElementById("trgt-ongoing").appendChild(s);
      //Append Abandon BUTTONS
      var b = document.createElement("button");
      b.setAttribute("class", "btn-abandon");
      b.setAttribute("id", "btn-abandon-" + list[c]._id);
      document.getElementById("trgt-ongoing").appendChild(b);
      b.innerHTML = "<i class='ion-ios-close-outline'></i><p>" + list[c].abandonIf + "</p>";
    } else {
      var s = document.getElementById("trgt-current");
      var t = document.getElementById("trgt-title");
      t.innerHTML = list[c].title;
    }
    s.innerHTML = list[c].text;

    //Restart the counter
    if (c < list.length){
        c += 1;
    } else {
        c = 0;
    }
});

document.querySelector('.btn-scheme-prev').addEventListener('click', function(){
  //Remove Scheme image
  var e = document.getElementById("targetScheme");
  if(e){
      $('#targetScheme').remove();
  }

  if(c-1 < 0){
    c = 0;
  } else {
    c -= 1;
  }

  //Add Scheme Img
  var x = document.createElement("IMG");
  x.setAttribute("src", "imgs/"+list[c].imgPath);
  x.setAttribute("width", "100%");
  x.setAttribute("height", "100%");
  x.setAttribute("id", "targetScheme");
  document.getElementById("target").appendChild(x);
});

//FUNCTIONS
function rmvElement(tag){
    var e = document.getElementById(tag);
    c = '#' + tag;
    if (e){
      $(c).remove();
    }
}

function nxtScheme(list){
    var x = document.createElement("IMG");
    x.setAttribute("src", "imgs/"+list[c].imgPath);
    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("id", "targetScheme");
    document.getElementById("target").appendChild(x);
}

function addSchemeEffect(scheme){
    var x = document.getElementById('trgt-current');
    s.innerHTML += scheme.text;
}
