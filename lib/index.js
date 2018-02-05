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
const accumulate = function*(iterator, func=add)  {
    let total = iterator[0];
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

/**
 * 
 * @param {*} iterable 
 */
const unique = function*(iterable) {
    seen = {};
    for (let i=0; i < iterable.length; i++) {
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
const list = function(iterator) {
    let list = [];

    for(let elem of iterator) {
        list.push(elem);
    };
    return list;
};

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


export {list, range};
