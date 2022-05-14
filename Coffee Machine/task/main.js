// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
//import input from "sync-input";


let water = input("Write how many ml of water the coffee machine has:");
let milk = input("Write how many ml of milk the coffee machine has:");
let cofBean = input("Write how many grams of coffee beans the coffee machine has:");
let cupNeed = input("Write how many cups of coffee you will need:");
let cups = Math.floor(Math.min(water/200, milk/50, cofBean/15));
if (cups == cupNeed) {
    console.log("Yes, I can make that amount of coffee");
} else if (cups > cupNeed) {
    console.log(`Yes, I can make that amount of coffee (and even ${cups - cupNeed} more than that)`);
} else {
    console.log(`No, I can make only ${cups} cups of coffee`);
}