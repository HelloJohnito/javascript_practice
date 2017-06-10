// create an object of 5 cats with information.


var cats = {
  cat1: {
    name: "cat1",
    img: "http://www.telegraph.co.uk/content/dam/pets/2017/01/06/2-JS117202740-yana-two-face-cat-news-small_trans_NvBQzQNjv4Bq6OSVDLJdG-ypfVsRFKR-mLAGLIqw3-UGQfihKkRs-p8.jpg",
    clickCount: 0
  },

  cat2: {
    name: "cat2",
    img: "https://s-media-cache-ak0.pinimg.com/236x/e7/80/c0/e780c01640cf9fbff0e623f9fac13998.jpg",
    clickCount: 0
  },

  cat3: {
    name: "cat3",
    img: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    clickCount: 0
  },
};


// loop through and create a list of names.
  // set on clicks. when clicked display the cat's information.

var body = document.querySelector("body");
var displayName = document.querySelector(".cat-name");
var displayCount = document.querySelector(".cat-count");
var displayImg = document.querySelector(".cat-img");


(function(){
  var catsList = Object.keys(cats);

  for(var catIndex = 0; catIndex < catsList.length; catIndex ++){
    var newElement = document.createElement("div");
    var name = document.createTextNode(catsList[catIndex]);
    newElement.appendChild(name);

    setClickListeners(newElement, catsList[catIndex]);
    body.appendChild(newElement);
  }

  displayImg.addEventListener("click", function(){
    console.log(displayImg.name);
    cats[displayImg.name].clickCount += 1;
    displayCount.innerHTML = cats[displayImg.name].clickCount;
  });
})();


function setClickListeners(newElement, clickedCat){
  newElement.addEventListener("click", (function(cat){
    return function(){
      displayName.innerHTML = cats[cat].name;
      displayCount.innerHTML = cats[cat].clickCount;
      displayImg.setAttribute("src", cats[cat].img);
      displayImg.setAttribute("name", cat);
    };
  })(clickedCat));
}



//
// function displayCatInfo(cat){
//   var displayName = document.querySelector(".cat-name");
//   var displayCount = document.querySelector(".cat-count");
//   var displayImg = document.querySelector(".cat-img");
//
//   displayName.innerHTML = cats[cat].name;
//   displayCount.innerHTML = cats[cat].count;
//   displayImg.setAttribute("src", cats[cat].img);
// }
