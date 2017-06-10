var cat1 = document.getElementById('cat-image-1');
var cat2 = document.getElementById('cat-image-2');
var click1 = document.getElementById('click-count-1');
var click2 = document.getElementById('click-count-2');

var clickCount1 = 0;
var clickCount2 = 0;

cat1.addEventListener("click", function(){
  clickCount1 += 1;
  click1.innerHTML = clickCount1;
});

cat2.addEventListener("click", function(){
  clickCount2 += 1;
  click2.innerHTML = clickCount2;
});
