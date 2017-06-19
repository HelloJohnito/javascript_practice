(function(){

  //schema
  // todolist = {
  //   id: {
  //     item: "today I will study"
  //   }
  // }

  var model = {
    todolist: {}
  };

  var controller = {
    init: function(){
      this.id = 0;
      view.init();
    },

    //returns all todos in an array form.
    getAllTodos: function(){
      return Object.keys(model.todolist).map(function(id){
          return model.todolist[id];
      });
    },

    addTodoItem: function(todo){
      model.todolist[this.id] = todo;
      this.id+= 1;
      view.renderTodo();
    }
  };


  var view = {
    init: function(){
      this.todoList = document.querySelector(".todo-list");
      this.input = document.querySelector(".todo-input");
      var submitButton = document.querySelector(".todo-submit");

      var self = this;
      submitButton.addEventListener("click", function(e){
        e.preventDefault();
        var todoItem = {item: self.input.value};
        controller.addTodoItem(todoItem);
      });

      view.renderTodo();
    },

    renderTodo: function(){
      var todos = controller.getAllTodos();
      var self = this;
      this.todoList.innerHTML = "";
      
      todos.forEach(function(todo){
        var list = document.createElement("li");
        var text = document.createTextNode(todo.item);
        list.appendChild(text);
        self.todoList.appendChild(list);
      });
    }
  };

  controller.init();
})();
