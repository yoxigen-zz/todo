(function(){
    var TodoItemProto = Object.create(HTMLElement.prototype);

    TodoItemProto.createdCallback = function() {
        this.innerHTML = "Do something today!";
    };

    var TodoItem = document.registerElement("todo-item", {
        prototype: TodoItemProto
    });
})();
