# bamazon

![](https://github.com/tamrichardson/bamazon/blob/master/screenshot.JPG)

how to use:
1.) Clone the repo to you local machine
2.) npm install init -y, inquirer, mysql, and chalk packages
3.) Copy the data from seeds.sql and bamazon_DB.sql files into a MySql database
4.) Connect your new database to the bamazonCustomer.js file
5.) In node run the file (nodebamazonCustomer.js)
6.)Follow the inquirer prompts

Tech used:
javaScript
node.js
MySQL

What the app does:
This app acts like an online store similar to Amazon. When the app is run the user is asked to choose from 4 options (view products, make a purchase, sell a product and exit).  When "view products" is selected a table displaying all available items to buy or sell will appear. When "make a purchase" is selected the user will be asked the id # of the item they want and the quantity they wish to buy and a total price will be generated based on the item and quantity.  When "sell a product" is selected the user will be asked the id # of the item they want and the quantity they wish to sell and a total cash back amount will be generated based on the item and quantity. When "exit" is selected the user will be asked if they want to leave bamazon y/n, if y is selected the connection ends if n is selected the user is prompted to make another choice. 
