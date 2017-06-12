(function(){

    var model = {

      currentCat: null,
      cats: [
        {
          name: "cat1",
          img: "http://www.telegraph.co.uk/content/dam/pets/2017/01/06/2-JS117202740-yana-two-face-cat-news-small_trans_NvBQzQNjv4Bq6OSVDLJdG-ypfVsRFKR-mLAGLIqw3-UGQfihKkRs-p8.jpg",
          clickCount: 0
        },

        {
          name: "cat2",
          img: "https://s-media-cache-ak0.pinimg.com/236x/e7/80/c0/e780c01640cf9fbff0e623f9fac13998.jpg",
          clickCount: 0
        },

        {
          name: "cat3",
          img: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
          clickCount: 0
        },
      ]
    };


    var controller = {
      init: function(){
        this.setCurrentCat(model.cats[0]);

        catList.init();
        catDetail.init();
      },

      getCurrentCat: function(){
        return model.currentCat;
      },

      setCurrentCat: function(newCurrentCat){
        model.currentCat = newCurrentCat;
        return;
      },

      getCats: function(){
        return model.cats;
      },

      addCounter: function(cat){
        model.currentCat.clickCount += 1;
        catDetail.render();
      }
    };


    var catList = {

      init: function(){
        this.catListElement = document.querySelector(".cat-list");
        this.render();
      },

      render: function(){
        var cats = controller.getCats();
        for(var catsIndex = 0; catsIndex < cats.length; catsIndex++){
          var cat = cats[catsIndex];
          var catElement = document.createElement('li');
          var catNameNode = document.createTextNode(cat.name);

          catElement.addEventListener("click", (function(copyCat){
            return function(){
              controller.setCurrentCat(copyCat);
              catDetail.render();
            };
          })(cat));

          catElement.appendChild(catNameNode);
          this.catListElement.appendChild(catElement);
        }
      }
    };

    var catDetail = {
      init: function(){
        this.displayName = document.querySelector(".cat-name");
        this.displayCount = document.querySelector(".cat-count");
        this.displayImg = document.querySelector(".cat-img");

        this.displayImg.addEventListener("click", function(){
          controller.addCounter();
        });

        this.render();
      },

      render: function(){
        var currentCat = controller.getCurrentCat();
        this.displayName.innerHTML = currentCat.name;
        this.displayCount.innerHTML = currentCat.clickCount;
        this.displayImg.setAttribute('src', currentCat.img);
      }
    };

    controller.init();
  })();
