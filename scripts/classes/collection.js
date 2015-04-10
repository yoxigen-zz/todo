function Collection(id, collectionType, storage){
    if (!this instanceof Collection)
        return new Collection(collectionType);

    if (!(storage instanceof Storage))
        throw new TypeError("Invalid storage for Collection, expected an instance of Storage.");

    if (collectionType && collectionType.constructor === Function)
        this.type = collectionType;

    this.id = id;
    this.storage = storage;
    this._items = [];
}

Collection.prototype.add = function(item, save){
    if (this.type && !(item instanceof this.type))
        throw new TypeError("Invalid type to add to collection, expected an instance of " + this.type.name + " but got " + item.constructor.name + ".");

    this._items.push(item);
    item.setOnUpdate(this.save.bind(this));

    if (save)
        this.save();

    return this;
};

Collection.prototype.remove = function(item){
    var itemIndex = this._items.indexOf(item);
    if (~itemIndex)
        this._items.splice(itemIndex, 1);

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
    console.log("Load collection '" + this.id + "'.");
    return this;
};
