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
    switch (coffee) {
        case '1':
            if (water < 250) {
                console.log('Sorry, not enough water!');
            } else if (cofBean < 16) {
                console.log('Sorry, not enough coffee beans!');
            } else if (cups === 0) {
                console.log('Sorry, not enough cups!');
            } else {
                water = water - 250;
                cofBean = cofBean - 16;
                cups--;
                money = money + 4;
                console.log('I have enough resources, making you a coffee!')
            }
            break;
        case '2':
            if (water < 350) {
                console.log('Sorry, not enough water!');
            } else if (milk < 75){
                console.log('Sorry, not enough milk!');
            } else if (cofBean < 20) {
                console.log('Sorry, not enough coffee beans!');
            } else if (cups === 0) {
                console.log('Sorry, not enough cups!');
            } else {
                water = water - 350;
                milk = milk - 75;
                cofBean = cofBean - 20;
                cups--;
                money = money + 7;
                console.log('I have enough resources, making you a coffee!')
            }
            break;
        case '3':
            if (water < 200) {
                console.log('Sorry, not enough water!');
            } else if (milk < 100){
                console.log('Sorry, not enough milk!');
            } else if (cofBean < 12) {
                console.log('Sorry, not enough coffee beans!');
            } else if (cups === 0) {
                console.log('Sorry, not enough cups!');
            } else {
                water = water - 200;
                milk = milk - 100;
                cofBean = cofBean - 12;
                cups--;
                money = money + 6;
                console.log('I have enough resources, making you a coffee!')
            }
            break;
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


let action = null;
while (action !== 'exit') {
    action = input("Write action (buy, fill, take):");
    switch (action){
        case 'buy':
            buy();
            break;
        case 'fill':
            fill();
            break;
        case 'take':
            take();
            break;
        case 'remaining':
            displaySupplies(water, milk, cofBean, cups, money);
            break;
    }
}
