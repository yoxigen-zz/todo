function Collection(id, collectionType, storage){
    if (!this instanceof Collection)
        return new Collection(collectionType);

    if (collectionType && collectionType.constructor === Function)
        this.type = collectionType;

    this.id = id;
    this.storage = new storage(id);
    this.items = [];
    this.load();
}

Collection.prototype.add = function(item, save){
    if (this.type && !(item instanceof this.type))
        throw new TypeError("Invalid type to add to collection, expected an instance of " + this.type.name + " but got " + item.constructor.name + ".");

    this.items.push(item);
    item.setOnUpdate(this.save.bind(this));

    if (save)
        this.save();

    return this;
};

Collection.prototype.remove = function(item){
    var itemIndex = this.items.indexOf(item);
    if (~itemIndex)
        this.items.splice(itemIndex, 1);

    this.save();

    return this;
};

/**
 * Save to storage
 */
Collection.prototype.save = function(){
    this.storage.save(this);
    console.log("SAVE COLLECTION '" + this.id + "'.");
    return this;
};

Collection.prototype.load = function(){
    var data = this.storage.load();
    if (data){
        for(var item of data.items){
            this.add(new this.type(item));
        }
    }

    return this;
};
