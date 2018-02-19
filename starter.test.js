//Test the arrays stuff
const starter = require('./starter');

// That filter out all odd numbers, only have even
test('should return only the even numbers', () => {
    let x = [1, 2, 3, 4, 5, 6];
    let y = starter.getAllEvens(x);
    console.log(y);
    expect(y.length).toBe(3);
    expect(y[0]).toBe(2);
});