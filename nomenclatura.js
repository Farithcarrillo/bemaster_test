function calculateSine(numberOne, numberTwo, numberThree) {
    let sum = numberOne + numberTwo; //Sum of numberOne and NumberTwo
    let product = sum * numberThree; // Product of the sum and numberThree
    let sine = Math.sin(product); // Calculate the sine of the product
    return sine; //Returns the calculated sine value
}

console.log(calculateSine(5,10,15));