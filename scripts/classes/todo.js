function ToDo(data){
    if (!(this instanceof ToDo))
        return new ToDo(data);

    if (data){
        this.validate(data);

        this.date = !isNaN(data.date) ? new Date(data.date) : data.date;
        this.text = data.text;
        this.isDone = !!data.isDone;
    }
    else
        this.isDone = false;
}

ToDo.prototype.validate = function(data){

};

ToDo.prototype.serialize = function(){

};

ToDo.prototype.setOnUpdate = function(onUpdate){
    this.onUpdate = onUpdate;
};

ToDo.prototype.save = function(){
    if (!this.id)
        this.id = +new Date();

    this.date = new Date();
    if (this.onUpdate)
        this.onUpdate(this);
};