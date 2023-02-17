// variable------
var a = 10;
var b = "zea";
let c = true;
let d = false;
let e = 30.32;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// mathematical opration
let aN = 10;
let bN = 12;
let total_addi = aN + bN;
let total_sub = aN - bN;
let total_multi = aN * bN;
let total_equ = aN / bN;
console.log(total_addi);
console.log(total_sub);
console.log(total_multi);
console.log(total_equ);

// // name of var
// var a = 10;
// // numvber
// var b = "zea";
// // string
// let c = true;
// //boolean
// let d = false;
// // Boolean
// let e = 30.32;
// // float

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)




// typeof js
var a2 = 10;
var b2 = "zea";
let c2 = true;
let d2 = false;
let e2 = parseFloat(30.5);
let date = new Date()
let fun = function() {};
console.log(typeof(a2));
console.log(typeof(b2));
console.log(typeof(c2));
console.log(typeof(d2));
console.log(typeof(e2));
console.log(typeof(date));
console.log(typeof(fun));

// convarting the type

let x = parseInt("10");
console.log(typeof x)
let y = parseFloat(10.45);
console.log(typeof y)
let z = parseFloat("zea");
console.log(typeof z)



// js array
let fr_names = ['shifat', 'mamun', 'rasif', 'takmim']
console.log(fr_names)


function multi(num1, num2) {
    let result = num1 * num2;
    return result;
}
let total = multi(20, 30);
console.log(total);


let taka = 6000;
let phone = 9000;
if (taka == phone) {
    console.log('ami phone kinbo');

} else {
    console.log('amr kase ato taka ni')
}
let demand = 'beskit';
if (demand == 'brskit') {
    console.log('ami bat kabo');

} else {
    console.log('ami bat kabo na')
}
let loop_w = 0;
while (loop_w < 10) {
    console.log(loop_w + ' Thank you,this is while loop');
    loop_w++;
}
for (i = 0; i < 7; i++) {
    console.log('hay this is for loop ' + i)
}

// factorial using loop
let factorial = 1;
for (i = 1; i <= 7; i++) {
    factorial = factorial * i;
    console.log(factorial)
}
let f_w = 1;
let myfac = 1
while (f_w <= 9) {
    myfac = myfac * f_w;
    f_w++;
}
console.log(myfac)

// factorial by using frnction

function myfactrial(number) {
    let factorial = 1;
    let i = 1
    while (i <= number) {
        factorial = factorial * i;
        i++

    }
    return factorial;
}
let resultFac = myfactrial(13);
console.log(resultFac);

function forFact(fNumber) {
    let factorial = 1;
    for (i = 1; i <= fNumber; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let fResult = forFact(8);
console.log(fResult)

// js switch
let s = 10;
switch (s) {
    case 10:
        console.log('The number is 10');
        break;
    case 13:
        console.log('The number is 13');
        break;
    case 15:
        console.log('The number is 15');
        break;
    case 18:
        console.log('The number is 18');
        break;
    case 11:
        console.log('The number is 11');
        break;
    default:
        console.log('number none');
}
// Object js
let names = {
    bangladesh: "dhaka",
    uk: 'london',
    pakistan: 'islabad',
    usa: 'new yerk'
}
console.log(names)