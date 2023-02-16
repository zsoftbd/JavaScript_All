let i = 0;
while (i <= 7) {
    console.log('This is while loop ' + i)
    i++
}

for (i = 0; i < 10; i++) {
    console.log('this is for loop ' + i)
}

let array1 = [10, 20, 30, 50, 2, 45];
for (i = 0; i < array1.length; i++) {
    let result = array1[i]
    console.log(result);
}
let array2 = [20, 200, 100, 50, 90, 50];
let w = 0;
while (w < array2.length) {
    console.log("this is array by while loop" + array2[w]);
    w++;
}

let scores = [22, 54, 76, 92, 43, 33];
let l = 0;
while (l < scores.length) {
    console.log(scores[l]);
    l++;
}