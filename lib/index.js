/**
 * Addition function.
 * 
 * @param {number} x 
 * @param {number} y 
 */
const add = (x, y) => (
    x + y
);

/**
 * Summation function
 * 
 * @param {number} x 
 * @param {number} y 
 */
const prod = (x, y) => (
    x * y
);

/**
 * 
 * @param {*} iterator 
 */
const accumulate = function*(iterator, func=add)  {
    let total = 0; // have to think of a way to make it work with products.

    for (let elem of iterator) {
        total = func(total, elem);
        yield total;
    }
};

/**
 * 
 * @param {*} iterable 
 */
const chain = function*(iterables) {
    for (let iterable of iterables) {
        for (let elem of iterable) {
            yield elem;
        }
    }
};

/**
 * 
 * @param {*} iterable 
 */
const unique = function*(iterable) {
    seen = {};
    for (elem of iterable) {
        if (seen[iterable[i]]) {
            continue;
        }

        seen[iterable[i]] = true;
        yield iterable[i];
    }
};

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @param {*} stepSize 
 */
const range = function*(start, end, stepSize=1) {
    const cmp = stepSize <= 0 ? (x, y) => (x > y) : (x, y) => (x < y);    

    let i=start;
    while(cmp(i, end)) {
        yield i;
        i += stepSize;
    }
};

/**
 * 
 * @param {*} iterator 
 */
const list = (iterator) => (
    [...iterator]
);

/**
 * 
 * @param {*} predicate 
 * @param {*} iterator 
 */
const takeWhile = function*(predicate, iterator) {
    for(let elem of iterator) {
        if(!predicate(elem)) {
            break;
        }
        yield elem;
    }
};

const count = function*(start=0, step=1) {
    let n = start;
    while(true) {
        yield n;
        n += step;
    }
};

export {
    list, range, accumulate, takeWhile, count
};
