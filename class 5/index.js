// <---BREAK and CONTINUE--->
/* let n = 10;
for (let i =0; i<=n; i++){
    if(i==7) break
    console.log(i);
}

let n = 10;
for(let i =0; i<=n;i++){
    if(i==4) continue
    console.log(i);
}
    */

/* (Q) Sum of a digit which user prompted
let n = Number(prompt('Enter number'));

let sum = 0;
while(n>0){
    let rem = n%10;
    sum += rem
    n = Math.floor(n/10);
}
console.log(sum);
*/

/* (Q) Reverse the number
let n = Number(prompt('Enter number'));

let rev = 0; 
while(n>0){
    let rem = n%10;
    rev = (rev*10) + rem; 
    n = Math.floor(n/10);
}
console.log(rev);
*/

/* (Q) Automorphic Number
// An Automorphic number is a number whose square ends in the same digits as the number itself. A number n is called automorphic.
let n = Number(prompt('Enter number'));
let copy = n;
let sq = n * n;
let count = 0;

while(n>0){
    count++;
    n = Math.floor(n/10);
}

if(sq % Math.pow(10, count) == copy) console.log('Automorphic Number')
    else console.log('Not Automorphic number');
*/

/* (Q) Accept a number from the user and calculate the product of all its digits.
let n = Number(prompt('Enter number'));
let copy = n;

let product = 1;

while(n>0){
 let rem = n % 10;
 product = product * rem;
 n = Math.floor(n / 10);
}

console.log("Product of digits of", copy, "is", product);
*/

/* (Q) Count Even and Odd Digits // n = 582943
let n = Number(prompt('Enter number'));

let evenNum = 0;
let oddNum = 0;

while(n > 0){

    let rem = n % 10;

    if(rem % 2 == 0){
        evenNum++;
    } else{
        oddNum++;
    }

    n = Math.floor(n / 10);
}

console.log("Even digits:", evenNum);
console.log("Odd digits:", oddNum);
*/
    

