const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce((accumulator, currVal) => {
    accumulator + currVal
}, 0);

console.log(sum);