function getOddNumbers(number){
    const oddNumbers = [];

    //Iterate from 1 to the param number
    for (let i = 0; i <= number; i++) {
        //Check if the current number is odd
        if (i % 2 !== 0) {
            oddNumbers.push(i); //Add the odd number to the array
        }
    }

    return oddNumbers; //Return the array of odd numbers
}

//Run the function
const paramNumber = 40;
console.log(getOddNumbers(paramNumber));