import * as iter from './lib/index.js';


test('Range works', () => {
    expect([1, 2, 3, 4]).toEqual(iter.list(iter.range(1, 5)));
});

test('Range works with descending stepsize', () => {
    expect([5, 4, 3, 2]).toEqual(iter.list(iter.range(5, 1, -1)));
});

test('Range return empty array with out of bounds range', () => {
    expect([]).toEqual(iter.list(iter.range(1, 5, -1)));
});

test('Accumelate works', () => {
    expect([1, 3, 6]).toEqual(iter.list(iter.accumulate(iter.range(1, 4))));
});

test('Accumlate works for product', () => {
    expect(iter.list(iter.accumulate(iter.range(1, 5), iter.prod))).toEqual([1, 2, 6, 24]);
});

test('Takewhile works', () => {
    expect([1, 2, 3, 4])
        .toEqual(
            iter.list(
                iter.takeWhile((x) => x < 5, 
                               iter.range(1, 10))
            )
        );
});

test('count works', () => {
    expect([0, 1, 2, 3, 4, 5]).toEqual(iter.list(iter.takeWhile((x) => x < 6, iter.count())));
});

test('filterfalse works', () => {
    expect(iter.list(iter.filterfalse(x => x % 2, iter.range(0, 10)))).toEqual([0, 2, 4, 6, 8]);
});

test('starmap works', () => {
    expect(iter.list(iter.starmap(iter.pow, [[2, 5], [3, 2], [10,3]]))).toEqual([32, 9, 1000]);
});