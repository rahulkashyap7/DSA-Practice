/* (Q) Accept an integer from user a print 'Hello world!' n times.
let n = Number(prompt('Enter Number'))
if(isNaN(n)){
    console.log("Invalid Input");
} else {
    for(i=1; i<=n; i++){
        console.log('Hello World!');        
    }
    console.log('Fail at ' + i);
}
    */

/* (Q) Print a table which value user prompted.(Upto 10)
 let n = Number(prompt('Enter number'))

 for(let i = 1; i<=10; i++){
    console.log(n + " * " + i + " = " + (n*i));
 }
    */

/* (Q) Sum up to n terms
let n = Number(prompt('Enter number'));
let factor = 1;

for(let i = 1; i<=n; i++){
    factor = factor * i;
}
console.log(factor);
*/

/* (Q) Print the sum of all even and odd numbers in a range seperately
let n = Number(prompt('Enter Number'));
let evenSum = 0; let oddSum = 0;

for (let i = 1; i <=n; i++){
    if(i % 2 == 0) evenSum += i;
    else oddSum += i;
}
    console.log('Even sum ' + evenSum);
    console.log('odd sum ' + oddSum);
 */

/* (Q) Print all the factors of a number
let n = Number(prompt('Enter number'));

for (let i = 1; i<=n/2; i++) {
    if (n % i ==0) console.log(i);
    
}
console.log(n);

*/

// (Q) Check if numer is Prime of not (optimize the code).
// Prime number ya to 1 se divisable hota hai ya to khud se divisable hota hai or wo number sirf 2 baaar divisable hota hai.
// NOTE: 2 se lekar square root tak agar koi number divisable nahi hua to wo uske baad aage bhi kisi number se divide nahi hoga.

let n = Number(prompt('Enter number'));
/* let isPrime = true;

for(let i = 2; i<n; i++){
    if(n%i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime) console.log('Prime number');
else console.log('No prime number');

*/
/* ----- Optimized way

let isPrime = isPrimeFn(n)
if(isPrime) console.log('Prime Number');
else console.log('Not prime number');

function isPrimeFn(n){
    if(n<=1) return false
    if(n==2) return true
    if(n%2 ==0) return false;
    for (let i = 3; i<=Math.floor(Math.sqrt(n)); i++){
        if(n%i==0) return false;
    }
    return true;
}
*/



