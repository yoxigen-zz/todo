(function(Collection, ToDo, Storage){
    'use strict';

    var todoList = new Collection("example", ToDo, new Storage());

    var todo = new ToDo();
    todo.text = "testing!";
    todoList.add(todo)

    setTimeout(function(){
        todo.save();
    }, 1000);
})(Collection, ToDo, Storage);