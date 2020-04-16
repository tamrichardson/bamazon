var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM productsTable", function (err, response) {
        if (err) throw err;
        console.log(response);
        connection.end();
    });
}

function chooseProduct() {
    inquirer
        .prompt({
            name: "type",
            type: "selection",
            message: "Choose the ID of the product you would like to buy."
        })
}
function chooseQuantity() {
    inquirer
        .prompt({
            name: "type",
            type: "quantity",
            message: "How many would you would like to buy?"
        })
}