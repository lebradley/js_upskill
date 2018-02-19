const fizzer = require('./fizzbuzz');

test('should return fizz when divisible by 3', () => {
    expect(fizzer.FizzBuzz(3)).toBe("Fizz");
});

test('should return the number given when not divisible by 3', () => {
    const testvalue = 1;
    expect(fizzer.FizzBuzz(testvalue)).toBe(1);
});

test('should return buzz when divisible by 5', () => {
    expect(fizzer.FizzBuzz(10)).toBe("Buzz");
});

test('should return the number given when not divisible by 5', () => {
    const testvalue = 4;
    expect(fizzer.FizzBuzz(testvalue)).toBe(4);
});

test('should return fizzbuzz when divisible by 3 or 5', () => {
    expect(fizzer.FizzBuzz(15)).toBe("FizzBuzz");
});

test('the play function actually does a thing!', () => {
    const testArray = [1, 2, 3, 4, 5];
    const result = fizzer.Play(testArray);
    expect(result.length).toBe(5);
    expect(result[2]).toBe('Fizz');
    expect(result[4]).toBe('Buzz');
});

