/*------ (Q.) Calculate Compount Interest

let p = Number(prompt('Enter principle'))
let r = Number(prompt('Enter rate'))
let t = Number(prompt('Enter time'))

console.log(p * Math.pow(1 + r/1000, t)) - p;

*/

/*------ (Q.) Generate OTP Equation

console.log(Math.floor(Math.random() * 9000 + 1000));

*/

/*------ (Q.) Area of Triangle using heron's formula?

let a = Number(prompt('Enter first side'))
let b = Number(prompt('Enter second side'))
let c = Number(prompt('Enter third side'))

if (a+b<=c || a+c<=b || b+c<=a){
    console.log('Not possible');
} else{
    let s = (a+b+c) / 2
    console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));    
}
*/


/*------ (Q.) Calculate circumfrence of the circle

let r = Number(prompt('Enter radius'))
console.log(2 * Math.PI * r);
*/


