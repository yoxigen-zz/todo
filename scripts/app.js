(function(Collection, ToDo, Storage){
    'use strict';

    var todoList = new Collection("example", ToDo, Storage);
    document.querySelector("todo-list").setModel(todoList);
})(Collection, ToDo, Storage);