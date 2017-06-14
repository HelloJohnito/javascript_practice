(function(){

    var model = {

      form: {
        name: null,
        img: null,
        clickCount: null
      },

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
        admin.init();
        this.setCurrentCat(model.cats[0]);

        catList.init();
        catDetail.init();
      },

      getCurrentCat: function(){
        return model.currentCat;
      },

      setCurrentCat: function(newCurrentCat){
        model.currentCat = newCurrentCat;
        model.form.name = newCurrentCat.name;
        model.form.img = newCurrentCat.img;
        model.form.clickCount = newCurrentCat.clickCount;
        admin.render(model.form);
        return;
      },

      getCats: function(){
        return model.cats;
      },

      addCounter: function(cat){
        model.currentCat.clickCount += 1;
        catDetail.render();
      },

      setForm: function(type, value){
        model.form[type] = value;
      },

      updateCurrentCat: function(newCat){
        model.currentCat['name'] = newCat.name;
        model.currentCat['img'] = newCat.img;
        model.currentCat['clickCount'] = parseInt(newCat.clickCount);
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

    var admin = {
      init: function(){
        this.inputElements = document.querySelectorAll(".form-input");
        var adminDisplayButton = document.querySelector(".admin-button");
        var adminForm = document.querySelector(".admin-form");

        var submitButton = document.querySelector(".admin-submit");

        adminDisplayButton.addEventListener("click", function(e){
          e.preventDefault();
          if(adminForm.style.display === 'none'){
            adminForm.style.display = 'block';
          }
          else {
            adminForm.style.display = 'none';
          }
        });

        var that = this;
        submitButton.addEventListener("click", function(e){
          e.preventDefault();
          that.inputElements.forEach(function(inputElement){
            controller.setForm(inputElement.name, inputElement.value);
          });
          controller.updateCurrentCat(model.form);
        });

      },

      render: function(form){
        this.inputElements.forEach(function(inputElement){
          var inputType = inputElement.name;
          inputElement.value = form[inputType];
        });
      }
    };


    controller.init();
  })();
