// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')


let water = 400;
let milk = 540;
let cofBean = 120;
let cups = 9;
let money = 550;

function displaySupplies(w, m, cof, cup, mon) {
    console.log(`The coffee machine has:
${w} ml of water
${m} ml of milk
${cof} g of coffee beans
${cup} disposable cups
$${mon} of money`);
}

function buy() {
    let coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    if (coffee == '1') {
        water = water - 250;
        cofBean = cofBean - 16;
        cups--;
        money = money + 4;
    } else if (coffee == '2') {
        water = water - 350;
        milk = milk - 75;
        cofBean = cofBean - 20;
        cups--;
        money = money + 7;
    } else if (coffee == '3') {
        water = water - 200;
        milk = milk - 100;
        cofBean = cofBean - 12;
        cups--;
        money = money + 6;
    } else {
        console.log('Wrong order');
    }
}

function fill() {
    let w = input("Write how many ml of water you want to add:");
    let m = input("Write how many ml of milk you want to add:");
    let cof = input("Write how many grams of coffee beans you want to add:");
    let cup = input("Write how many disposable coffee cups you want to add:");
    water = water + Number(w);
    milk = milk + Number(m);
    cofBean = cofBean + Number(cof);
    cups = cups + Number(cup);
}

function take() {
    console.log(`I gave you $${money}`);
    money = 0;
}

displaySupplies(water, milk, cofBean, cups, money);
let action = input("Write action (buy, fill, take):");
if (action == 'buy') {
    buy();
    displaySupplies(water, milk, cofBean, cups, money);
} else if (action == 'fill') {
    fill();
    displaySupplies(water, milk, cofBean, cups, money);
} else if (action == 'take') {
    take();
    displaySupplies(water, milk, cofBean, cups, money);
} else {
    console.log('Wrong action');
}