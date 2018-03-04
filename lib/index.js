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

const pow = (x, y) => (
    Math.pow(x, y)
);

/**
 * 
 * @param {*} iterator 
 */
const accumulate = function*(iterator, func = add)  {
    let total = iterator.next().value; 
    yield total;

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

const filterfalse = function*(predicate, iterable) {
    for(let elem of iterable) {
        if (predicate(elem)) {
            continue
        }

        yield elem;
    }
};

/**
 * Note that there are no tuples in js therefore
 * the arguments in iterable are structured in arrays.
 * 
 * @param {*} func 
 * @param {*} iterable 
 */
const starmap = function*(func, iterable) {
    for(let elem of iterable) {
        yield func(...elem);
    }
};

export {
    list, 
    range, 
    accumulate, 
    takeWhile, 
    count, 
    prod, 
    add,
    filterfalse,
    starmap,
    pow
};
