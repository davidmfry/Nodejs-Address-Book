var fs = require("fs");

fs.readFile("./data.json", "utf-8", function (error, data) {
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(data);
    }
});