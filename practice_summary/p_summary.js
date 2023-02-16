// number type array
let aray = [20, 30, 40, 50, 40, 12];
console.log(aray)

// string type array

// length CHAK HOW MANY ELEMENTS HERE 
let names1 = ["zea", 'karim', 'zeaoul', 'muhammad'];
console.log(names1);
names1 = names1.length;
console.log(names1);

// push  add ELEMENT
let names2 = ["1zea", 'karim', 'zeaoul', 'muhammad'];
console.log(names2)
names2 = names2.push("rasif");
console.log(names2)


// shift MULTIPUL VALUE REMOVE
let names_2 = ["2zea", 'karim', 'zeaoul', 'muhammad'];
console.log(names_2)
names_2 = names_2.splice(1);
console.log(names_2)

// pop remove last value
let names3 = ["3zea", 'karim', 'zeaoul', 'muhammad', 'robyat'];
console.log(names3)
names3 = names3.pop()
console.log(names3)

// REMOVE FIRST Element
let names_3 = ["3zea", 'karim', 'zeaoul', 'muhammad', 'robyat'];
console.log(names_3)
names_3 = names_3.shift()
console.log(names_3)

// remove sentence clice
let names4 = "The name of my company ZsoftBd"
console.log(names4);
sli = names4.slice(5, 12)
console.log(sli)

// CHAK INDEX ON array Element
let names5 = ["5zea", 'karim', 'zeaoul', 'muhammad', 'robyat'];
console.log(names5)
names5 = names5.indexOf('zeaoul');
console.log(names5)

// using if else on array
let nArry = ['bangladesh', 'india', 'pakistan', 'napal', 'vutan']
if (nArry.indexOf(0) == 'bangladesh') {
    console.log('good job zeaul');
} else {
    console.log("try more your self")
}
let nArry1 = ['bangladesh', 'india', 'pakistan', 'napal', 'vutan']
if (nArry1[0] == 'bangladesh' && nArry1.length == 5 || nArry.indexOf(2) == 'pakistan') {
    console.log('good job zeaul');
} else {
    console.log("try more your self")
}