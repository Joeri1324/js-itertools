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
