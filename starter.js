//Do some array practice

//Filter
const numberlist = [1, 2, 3, 4]

function getAllEvens(array) {
    let answer = array.filter(a => (a % 2 == 0));
    return answer;
};

//Map

//ForEach

//other methods? 


// Coercion
let score = 5
let x = "5";
let equality = (x == score); // implicit coercion
let equality2 = (x === score); // explicit coercion

module.exports = {
    getAllEvens
};