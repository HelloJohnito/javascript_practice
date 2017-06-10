//Refactor and implement MVC


(function(){

    //////////////////////////
            //Model//
    /////////////////////////

    var model = {

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


    /////////////////////////////////
          // Controller //
    ////////////////////////////////

    var controller = {

      init: function(){
        this.catsList = Object.keys(model);
        this.createCatList();
      },

      createCatList: function(){
        view.init(this.catsList);
      },

      addCounter: function(catName){
        model[catName].clickCount += 1;
      }
    };

    var view = {
      init: function(catsList){
        this.displayCatList = document.querySelector(".cat-list");
        this.displayName = document.querySelector(".cat-name");
        this.displayCount = document.querySelector(".cat-count");
        this.displayImg = document.querySelector(".cat-img");

        for(var catIndex = 0; catIndex < catsList.length; catIndex++){

          var newElement = this.renderList(catsList,catIndex);
          this.setClickListenersToName(newElement, catsList[catIndex]);

          this.renderDetail(newElement);
        }

        var self = this;
        this.displayImg.addEventListener("click", function(){
          controller.addCounter(this.name);
          self.displayCount.innerHTML = model[this.name].clickCount;
        });
      },

      setClickListenersToName: function(newElement, catName){
        var self = this;
        newElement.addEventListener("click", (function(cat){
          return function(){
            self.displayName.innerHTML = model[cat].name;
            self.displayCount.innerHTML = model[cat].clickCount;
            self.displayImg.setAttribute("src", model[cat].img);
            self.displayImg.setAttribute("name", cat);
          };
        })(catName));
      },

      renderList: function(catsList, catIndex){
        var newElement = document.createElement("div");
        var name = document.createTextNode(catsList[catIndex]);
        newElement.appendChild(name);
        return newElement;
      },

      renderDetail: function(element){
        this.displayCatList.appendChild(element);
      }
    };

    controller.init();
  })();
