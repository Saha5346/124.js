
let arr = [1, 4, 2, 7, 5];
function add(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let end = add(arr);
console.log(end);