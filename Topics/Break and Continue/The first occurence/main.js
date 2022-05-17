function find5(numbers) {
    for (let x in numbers) {
        if (numbers[x] === 5) {
            return x;
        }
    }
    return -1;
}