

var Command = {};


Command.getOperation = function () {
    return process.argv[2];
};


Command.getOperationData = function () {
    return process.argv[3];
};


Command.add = function (done) {
    var Contact = require("./contact");
    var newContact = Contact.createContact(this.getOperationData());

    Contact.saveContact(newContact, done);
};

Command.find = function (done) {
    var Contact = require("./contact");
    var searchName = Contact.parseName(this.getOperationData());
    Contact.findContacts(searchName, function (error, contacts) {
        if (error)
        {
            return done(error);
        }
        console.log(contacts);
        done(error, contacts);
    });

};


module.exports = Command;
