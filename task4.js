function checkPair(arr, size, number) {
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
            if (arr[i] + arr[j] == number) {
                console.log("Pair with a given sum " + number + " is (" + arr[i] + ", " + arr[j] + ")");
                return true;
            }
        }
    }
    return false;
}

let arr = [1, 3, 6, 2, 2, 0, 4, 5];
let number = 5;
let size = arr.length;
if (checkPair(arr, size, number)) {
    console.log("Valid pair exists");
}
else {
    console.log("No valid pair exists for " + number);
}
