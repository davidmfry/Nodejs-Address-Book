
var Contact = {

};


Contact.parseName = function(str) {
    return str.split(",")[0].trim();
};


Contact.parseNumber = function (str) {
    return str.split(",")[1].trim();
};


Contact.createContact = function (str) {
    return {
        name: this.parseName(str),
        number: this.parseNumber(str)
    }
};


Contact.loadContacts = function (done) {
    var jsonfile = require("jsonfile");
    jsonfile.readFile("data.json", function (error, data) {
        if (error)
        {
            console.error(error);
        }
        else
            done(error, data);
    });
};


Contact.saveContacts = function (contacts, done) {
    var jsonfile = require("jsonfile");
    jsonfile.writeFile("data.json", contacts, function(error) {
        if (error)
        {
            console.error(error)
        }
        else
            done(error);
    });
};


module.exports = Contact;