var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    //console.log("connected as id " + connection.threadId);
    afterConnection();
});
console.log(chalk.magenta("************************************\n"));
console.log(chalk.green("WELCOME TO THE BAMAZON SUPERSTORE"));
console.log(chalk.magenta("\n************************************\n"));

function afterConnection() {

    inquirer.prompt({
        type: "list",
        name: "userOptions",
        message: "What would you like to do?",
        choices: ["View products", "Make a purchase", "Sell a product", "Exit"]

    }).then(function (response) {
        console.log(response.userOptions)
        if (response.userOptions === "View products") {
            console.table(response)
            connection.query("SELECT * FROM productsTable", function (err, response) {
                if (err) throw err;
                console.table(response);
                afterConnection();
            });
        } if (response.userOptions === "Make a purchase") {
            console.table(response);
            choose();
            //chooseQuantity()
        } if (response.userOptions === "Sell a product") {
            sell();
        } if (response.userOptions === "Exit") {
            exit();
        }
    })
}

function choose() {
    connection.query('SELECT item_id, product_name FROM productsTable', function (err, response) {
        // console.table(response);
        // console.log(typeof (response))
        var idArray = [];
        for (var i = 0; i < response.length; i++) {
            // console.log(response[i].item_id);
            idArray.push(response[i].item_id);
        }
        //console.log(idArray);
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Choose the ID of the product you would like to buy.',
                    choices: idArray,
                },
                {
                    type: 'input',
                    name: 'quantity',
                    message: 'How many would you would like to buy?',
                },
            ])
            .then(function (response) {
                console.log('You chose ID#: ' + response.selection + ' and you want: ' + response.quantity + '.');
            });
    });
}

function sell() {
    connection.query('SELECT item_id, product_name FROM productsTable', function (err, response) {
        // console.table(response);
        // console.log(typeof (response))
        var idArray = [];
        for (var i = 0; i < response.length; i++) {
            // console.log(response[i].item_id);
            idArray.push(response[i].item_id);
        }
        //console.log(idArray);
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Choose the ID of the product you would like to sell.',
                    choices: idArray,
                },
                {
                    type: 'input',
                    name: 'quantity',
                    message: 'How many would you would like to sell?',
                },
            ])
            .then(function (response) {
                console.log('You chose ID#: ' + response.selection + ' and you want sell: ' + response.quantity + '.');
            });
    });
}

function exit() {
    inquirer
        .prompt({
            type: "confirm",
            name: "quit",
            message: "Would you like to exit Bamazon?",
        }
        ).then(function (response) {
            if (response.quit === false) {
                afterConnection();
            } else {
                connection.end();
            }
        })
}
