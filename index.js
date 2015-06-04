var Command = require("./command");

var operation = Command.getOperation();

function handleResult(error)
{
    if (error)
    {
        console.log("Error!");
    }
    else
    {
        console.log("OK! The command ran successfully!");
    }
}

switch (operation.toLowerCase())
{
    case "add":
        Command.add(handleResult);
        break;
    case "find":
        Command.find(handleResult);
        break;
    default:
        console.log("That command is not supported!");
        break;
}