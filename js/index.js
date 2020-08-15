/**
 * program to check if credit card number is valid base on Luhn Algorithm
 * 
 */
// function: checkValidCard
// @param: cardNumber 
// return: true or false
 
function checkValidCard(cardNumber) {
    if (!cardNumber) {
        return false;
    }
    var newArray = cardNumber.split('').reverse().map(function (element, index) {
        if (index % 2 !== 0) {
            if (element * 2 > 9) {
                element = element * 2 - 9;
            }
            else {
                element *= 2;
            }
        }
        return parseInt(element);
    });
    console.log(newArray);
    var checkSum = newArray.reduce(function (accumulator, current) {
        return accumulator + current;
    })
    console.log(checkSum);
    return (checkSum % 10 === 0) ? true : false;

}
function main() {
    var cardNumber = document.getElementById("card-number").value;
    if (checkValidCard(cardNumber)) {
        console.log(cardNumber);
        document.getElementById("result").innerText = "Valid card!";
    }
    else {
        document.getElementById("result").innerText = "Invalid card!";
    }
}