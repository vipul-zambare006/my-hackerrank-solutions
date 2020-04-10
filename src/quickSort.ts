let inputArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 6, 5, 19, 10];
console.log(quickSort(inputArray, 0, inputArray.length - 1).forEach((x) => console.log(x)));

export function quickSort(inputArray: number[], left: number, right: number): number[] {
    if (left >= right) {
        return;
    }

    let pivotIndex = Math.floor((left + right) / 2);
    let pivot = inputArray[pivotIndex];
    let index: number = partition(inputArray, left, right, pivot);

    quickSort(inputArray, left, index - 1);
    quickSort(inputArray, index, right);

    return inputArray;
}


function partition(array: number[], left: number, right: number, pivot: number): number {
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

function swap(array: number[], left: number, right: number) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    return array;
}
