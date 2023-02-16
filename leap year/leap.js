let year = 2022
if (year % 4 == 0) {
    console.log("yes this leap year")
} else {
    console.log('the is not leap year')
}

// using function leap year

function leapYear(number) {
    if (number % 4 == 0) {
        return true;
    }
    return false;
}
let lYear = leapYear(2022);
console.log("is this leap year " + lYear);