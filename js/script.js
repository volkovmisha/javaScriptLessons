function counter() {
    let number = 7;
    return function () {
        let array = [];
        for (let i = number; i >= 0; i--) {
            array.push(i);
        }
        return array
    }
}

const array = counter();

function recursion(array, index, summ) {
    if (index === 0) {
        return summ += array[index];
    } else {
        return summ += array[index] + recursion(array, --index, summ)
    }
}

console.log(array())
const summ = recursion(array(), 7, 0)
console.log(summ)