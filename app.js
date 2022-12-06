function filterOutFalsy(filterFalsy1, filterFalsy2){
    return (!filterFalsy1) ? filterFalsy1 : filterFalsy2;
}
console.log(filterOutFalsy(10, 5));


function arrLength(arr){
    return arr.length;
}
console.log(arrLength('1'));


function lastElem(arr1){
    return arr1[arr1.length-1];
}
console.log(lastElem('1, 2, 3, 4'));


function arrSum(arr2){
    let sum = 0;
    for (let i= 0; i < arr2.length; ++i) {
    // how to loop through every element in an array
    sum = sum + arr2[i];
return sum;};
}
console.log(arrSum([1, 2, 3, 4, 5, 6]));


function progressiveSum(num1){
 let sum = 0;
 for (let i = 1; i <= num1; ++i) {
    sum = sum + i;
 }
return sum;
}
console.log(progressiveSum(3));



function calcTime(seconds){
    let timerMinutes = Math.floor(seconds/60);
    let timerSeconds = seconds % 60;
    if (timerMinutes.toString().length === 1 ){
      timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds;
}
console.log(calcTime(500));


function getMax(arr3) {
    let max = arr3[0];
for (let i = 1; i < arr3.length; ++i) {
if (arr3[i] > max) {
    max = arr3[i];
}
}
return max;
}
console.log(getMax([2, 3, 5]));



function reverseString(str) {
    return str.split('').reverse().join('');
} 
console.log(reverseString('loler'));

// to turn string to array u need to use .split('')
// .reverse() to reverse
// .join('') array to string


function convertToZeros(arr4) {
    let zer = [];
    for (let i = 0; i < arr4.length; ++i) {
 zer[i] = 0
}
return zer;
}
console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

// can also do return new Array(arr4.length).fill(0);
// can also do return arr4.map(elem => 0);
// map converts anything to whatevers on the right side of the =>


function removeApples(arr5) {
    let noApples = []
    for (let i= 0; i < arr5.length; ++i){
        console.log(arr5[i])
        if (arr5[i] !== "Apple"){
            noApples.push(arr5[i]);
        }
    } return noApples;
}

console.log(removeApples(["Banana", "Orange", "Apple"]));

// return arr5.filter(elem => elem !== "Apple")
// if use curly brackets u need to use return


function filtOutFalsy(arrsix){
    return arrsix.filter(elem => !!elem === true)
}
console.log(filtOutFalsy([ "", NaN, undefined, null, false, 500]));



function convertToBoolean(arr7){
    return arr7.map(elem => !!elem);
    
}
console.log(convertToBoolean([500, 0, false, "bruh"]));
