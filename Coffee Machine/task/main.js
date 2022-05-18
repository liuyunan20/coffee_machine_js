// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')


let water = 400;
let milk = 540;
let cofBean = 120;
let cups = {'regular': 9, 'large': 9};
let money = 550;
const espresso = {'water': 250, 'milk': 0, 'bean': 16, 'money': 4};
const latte = {'water': 350, 'milk': 75, 'bean': 20, 'money': 7};
const cappuccino = {'water': 200, 'milk': 100, 'bean': 12, 'money': 6};

function displaySupplies(w, m, cof, cup, mon) {
    console.log(`The coffee machine has:
${w} ml of water
${m} ml of milk
${cof} g of coffee beans
${cup.regular} regular disposable cups
${cup.large} large disposable cups
$${mon} of money`);
}

function buy() {
    let coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let size = Number(input("what size do want? 1 - regular, 2 - large"))
    switch (coffee) {
        case '1':
            makeCoffee(espresso, size)
            break;
        case '2':
            makeCoffee(latte, size)
            break;
        case '3':
            makeCoffee(cappuccino, size)
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

function makeCoffee(coffee, size) {
    if (water < coffee.water * size) {
        console.log('Sorry, not enough water!');
    } else if (milk < coffee.milk * size) {
        console.log('Sorry, not enough milk!');
    } else if (cofBean < coffee.bean * size) {
        console.log('Sorry, not enough coffee beans!');
    } else if ((size === 1 && cups.regular === 0) || (size === 2 && cups.large === 0)) {
        console.log('Sorry, not enough cups!');
    } else {
        water = water - coffee.water * size;
        milk = milk - coffee.milk * size;
        cofBean = cofBean - coffee.bean * size;
        if (size === 1) {
            cups.regular--;
        } else if (size === 2) {
            cups.large--;
        }
        money = money + coffee.money * size * 0.75;
        console.log('I have enough resources, making you a coffee!')
    }
}


let action = null;
while (action !== 'exit') {
    action = input("Write action (buy, fill, take, remaining, exit):");
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
