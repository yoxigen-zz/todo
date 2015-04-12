function Storage(id){
    this.id = "store_" + id;
}

Storage.prototype.save = function(data){
    var saveData = { data: data };
    localStorage.setItem("store_" + this.id, JSON.stringify(saveData));
};

Storage.prototype.load = function(){
    var storeData = localStorage.getItem("store_" + this.id);
    if (!storeData)
        return null;

    return JSON.parse(storeData).data;
};