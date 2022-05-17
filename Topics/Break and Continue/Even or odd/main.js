function checkEvenOrOdd(numbers) {
    for (let x in numbers) {
        if (numbers[x] === 0) {
            break;
        } else if (numbers[x] % 2 === 0) {
            console.log('even');
        } else if (numbers[x] % 2 === 1) {
            console.log('odd');
        }
    }
}