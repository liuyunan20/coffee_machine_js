function sum(numbers) {
    let sumNum = 0;
    for (let x in numbers) {
        if (numbers[x] === 0) {
            return sumNum;
        } else {
            sumNum = sumNum + numbers[x];
        }
    }
    return sumNum;
}