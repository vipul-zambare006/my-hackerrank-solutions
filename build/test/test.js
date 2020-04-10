"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inputArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 6, 5, 19, 10];
//console.log(quickSort(inputArray, 0, inputArray.length - 1).forEach((x) => console.log(x)));
//console.log(removeDuplicate(inputArray).forEach((x) => console.log(x)));
fizzBuzz();
function quickSort(inputArray, left, right) {
    if (left >= right) {
        return;
    }
    let pivotIndex = Math.floor((left + right) / 2);
    let pivot = inputArray[pivotIndex];
    let index = partition(inputArray, left, right, pivot);
    quickSort(inputArray, left, index - 1);
    quickSort(inputArray, index, right);
    return inputArray;
}
exports.quickSort = quickSort;
function partition(array, left, right, pivot) {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            array = swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}
function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    return array;
}
function removeDuplicate(arr) {
    // return [...new Set(arr)]
}
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        switch (true) {
            case isMultiple(i, 15):
                output = "FizzBuzz";
                break;
            case isMultiple(i, 3):
                output = "Fizz";
                break;
            case isMultiple(i, 5):
                output = "Buzz";
                break;
            default:
                output = i.toString();
                break;
        }
        console.log(output);
    }
}
function reverseString(input) {
    const mySet = new Set('vipul');
}
function isMultiple(num, mod) {
    return num % mod === 0;
}
function getLetter(s) {
    let letter;
    const setA = ['a', 'e', 'i', 'o', 'u'];
    const setB = ['b', 'c', 'd', 'f', 'g'];
    const setC = ['h', 'j', 'k', 'l', 'm'];
    const setD = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // Write your code here
    switch (true) {
        case setA.indexOf(s) > -1:
            letter = 'A';
            break;
        case setB.indexOf(s) > -1:
            letter = 'B';
            break;
        case setC.indexOf(s) > -1:
            letter = 'C';
            break;
        case setD.indexOf(s) > -1:
            letter = 'D';
            break;
    }
    return letter;
}
//# sourceMappingURL=test.js.map