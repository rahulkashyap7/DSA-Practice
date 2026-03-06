/* (Q) Accept an integer from the user and check if it is a Even or Odd.

let a = Number(prompt("Enter a Integer"));

if (a % 2 == 0){
    console.log('Number is Even');
} else {
    console.log('Number is Odd');
}
    */

/* (Q) Check Prompted year is leap year or not

let year = Number(prompt('Enter year'));
let isLeap = false;

if (year % 4 == 0) {
    if (year % 100 == 0){
        if (year % 400 == 0) isLeap = true
        else isLeap = false
    } else {
        isLeap = true
    }
} else isLeap = false;

console.log(isLeap ? 'Leap Year' : 'Not a leap year');
    */

/* (Q) SHOP DISCOUNT
AMOUNT                  DISCOUNT
0-5000                     0%
5001-7000                  5%
7001-9000                  10%
more than 9000             20%

#CODE----->
let amount = Number(prompt('Enter Amount'));
let dis = 0;

if (amount > 0 && amount <=5000) dis = 0;
else if (amount > 5000 && amount <= 7000) dis = 5;
else if (amount > 7000 && amount <= 9000) dis = 10;
else if (amount > 9000) dis = 20;
else console.log('Invalid Input');


console.log(amount - (dis * amount) / 100);
*/

/* (Q) BIJLI BILL UNIT
UNIT                      PRICE
upto 100                  Rs. 4.2/unit
101 - 200                 Rs. 6/unit
201 - 400                 Rs. 8/unit
more than 400             Rs. 13/unit

#CODE ------->
let unit = Number(prompt('Enter Units'));
let amount = 0;

if (amount > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
}
if (unit > 200 && unit <=400){
    amount = amount + (unit - 200) * 8;
    unit = 200;
}
if (unit > 100 && unit <=200) {
    amount = amount + (unit - 100) * 6;
    unit = 100;
}
amount = amount + unit * 4.2;
console.log(amount);

*/

