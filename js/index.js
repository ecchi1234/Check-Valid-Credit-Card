/**
 * program to check if credit card number is valid using Luhn Algorithm
 * 
 */
// function: checkValidCard
// @param: cardNumber : string
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
    });
    console.log(checkSum);
    return (checkSum % 10 === 0) ? true : false;

}
function main() {
    var cardNumber = document.getElementById("card-number").value;
    console.log(cardNumber);
    if (checkValidCard(cardNumber)) {
        console.log(cardNumber);
        document.getElementById("result").innerText = "Valid card!";
    }
    else {
        if (cardNumber === ''){
            document.getElementById("result").innerText = "You haven't enter anything."; 
        }
        else{
            document.getElementById("result").innerText = "Invalid card!";
        }
    }
}

// test on console

var test1 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5].join('');
var test2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3].join('');
var test3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4].join('');
console.log(test1);
console.log(test2);
console.log(test3);

function test(cardNumber){
    if (checkValidCard(cardNumber)){
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
test(test1);
test(test2);
test(test3);


