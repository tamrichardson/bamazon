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

    inquirer.prompt({
        type: "list",
        name: "userOptions",
        message: "What would you like to do?",
        choices: ["View products", "Make a purchase", "Exit"]

    }).then(function (response) {
        console.log(response.userOptions)
        if (response.userOptions === "View products") {
            console.table(response)
            connection.query("SELECT * FROM productsTable", function (err, response) {
                if (err) throw err;
                console.table(response);
                afterConnection()

            });
        } else if (response.userOptions === "Make a purchase") {
            chooseProduct()

        }
    })
}

function chooseProduct() {
    connection.query("SELECT item_id, product_name FROM productsTable", function (err, response) {
        // console.table(response);
        // console.log(typeof (response))
        var idArray = []
        for (var i = 0; i < response.length; i++) {
            // console.log(response[i].item_id);
            idArray.push(response[i].item_id)
        }
        console.log(idArray)

        inquirer
            .prompt({
                type: "list",
                name: "selection",
                message: "Choose the ID of the product you would like to buy.",
                choices: idArray

            })
    })

}
function chooseQuantity() {
    inquirer
        .prompt({
            type: "input",
            name: "quantity",
            message: "How many would you would like to buy?"

        })
}