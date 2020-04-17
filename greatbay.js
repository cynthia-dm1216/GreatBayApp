const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Batman10",
  database: "greatBay_DB"
});

//connecting to the mysql
connection.connect(function(err) {
  if (err) throw err;
});

//function if they choose to bid. it will ask you what ID do you what to bid on and how much you want to bid. it will rerun if the ID is wrong or bid is to low. then it will update the database with the newest bid
const biddingWar = function(){
  connection.query("SELECT * FROM auctions", function(err, res) {
    if(err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " +res[i].id + " | " + "Item: " + res[i].item_name + " | " + "Current Bid: " + res[i].highest_bid);
      console.log("-----------------------------------");
    }
