/* (Q) Repeat Hello user prompted

let userInput;

do{
    console.log('Hello');
    userInput = prompt('do you want to continue? yes/no').toLowerCase()
    
}
while(userInput === 'yes');
*/

/* (Q) Guess the number game

let guess = Math.floor(Math.random() * 100) +1;

let userInput;

do{
    userInput = Number(prompt("Enter a number b/w 1 to 100"))
    if(isNaN(userInput) || userInput < 0 || userInput > 100){
        console.log("Please enter valid number");
        continue
    }
    if(userInput > guess) console.log('Too hight, try again');
    else if(userInput < guess) console.log('Too low, try again');
    else console.log('Congrats ! and the number was' + guess);
} while(userInput !== guess);
 */

/* (Q) A calculator making

let userInput;
do{
    let num1 = Number(prompt('Enter first number'))
    let num2 = Number(prompt('Enter second number'))
    let operator = prompt('Enter valid operator(+, -, *, /)')

    switch(operator){
        case '+':
        console.log("Result" + (num1+num2));
        break
        case '-':
        console.log("Result" + (num1-num2));
        break
        case '*':
        console.log("Result" + (num1*num2));
        break
        case '/':
        if(num2 !== 0) console.log("Result" + (num1/num2));
        else console.log("Please enter valid number")
        break
        default:
            console.log('Please enter valid operator')
    }
    userInput = prompt("do you want to continue? yes/no").toLowerCase()
} while(userInput === 'yes');
 */

/* (Q) — Password Verification System
let password = 1234;
let attempts = 0;
let input;

do{

   input = Number(prompt('Enter 4 digit password'));

   if(input === password){
      console.log("Access Granted");
   }else{
      console.log("Incorrect Password");
   }

   attempts++;

}while(input !== password && attempts < 3);

if(input !== password){
   console.log("Account Locked");
}
   */

/* Question — ATM Withdrawal System
let amount;

do{

    amount = Number(prompt("Enter withdrawal amount"));

    if(isNaN(amount) || amount <= 0){
        console.log("Enter a valid number");
        continue;
    }

    if(amount % 100 !== 0){
        console.log("Enter amount in multiples of 100");
    }

}while(amount % 100 !== 0);

console.log("Please collect your cash:", amount);
*/