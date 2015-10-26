function Room(name, id, owner) {
    this.people = [];
};

Room.prototype.addPerson = function(person, callback) {
    var exists = false;
    for (i = 0; i < this.people.length; i++) {
        if (this.people[i]._id == person._id) {
            exists = true;
        }
    }
    if (!exists) {
        this.people.push(person);
    }

    callback();
};

Room.prototype.removePerson = function(personId, callback) {
    var i;
    for (i = 0; i < this.people.length; i++) {
        if (this.people[i]._id == personId) {
            this.people.splice(i, 1);
        }
    }
    callback();
};

module.exports = Room;
