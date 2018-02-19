// Fizz Buzz

function FizzBuzz(number) {
    if(number % 15 == 0) { //must be first case, otherwise Fizz is returned as number divisible by 3
        return "FizzBuzz";
    }
    if(number % 3 == 0) {
        return "Fizz";
    }
    if(number % 5 == 0){
        return "Buzz";
    }
    else {
        return number;
    }
};

function Play(numberArray) {
    let answer = numberArray.map(n => FizzBuzz(n)); // can be like this or only 'FizzBuzz()'
    return answer;
};

module.exports = {
    FizzBuzz,
    Play
};
