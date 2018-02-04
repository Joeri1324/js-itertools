/**
 * 
 * @param {*} x 
 * @param {*} y 
 */
const add = (x, y) => (
    x + y
);

/**
 * 
 * @param {*} x 
 * @param {*} y 
 */
const prod = (x, y) => (
    x * y
);

/**
 * 
 * @param {*} iterator 
 */
const accumelate = function*(accumelator, func=add)  {
    let total = accumelator[0];
    yield total;

    for (let i=1; i < accumelator.length; i++) {
        total = func(total, accumelator[i]);
        yield total;
    }
};

/**
 * 
 * @param {*} iterable 
 */
const chain = function*(iterable) {
    for (let i=0; i < iterable.length; i ++) {
        for (let j=0; j < iterable[i].length; j++) {
            yield iterable[i][j];
        }
    }
};


// const arr = [1, 2, 3, 4, 5];
// for(let number of accumelate(, func=add)) {
//     console.log(number);
// }

for(let elem of chain([[1, 2], [3, 5]])) {
    console.log(elem);
}