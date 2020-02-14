//Exercise 1
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//Exercise 2
console.log(add(1, 2))     // Prints 3, since it calls the function with 1 and 2 as parameters
console.log(add)          // Prints the function, since add is a reference to the function 
console.log(add(1, 2, 3)); // Prints 3, since it calls the function with 1 and 2, which it uses,
                           // and also 3 as a parameter, which it doesn't use
console.log(add(1));	  // Prints NaN, since it tries to use the numerical operator + on 1 and 'undefined'	
console.log(cb(3, 3, add)); // Prints the string Result from the two numbers: 3 + 3 = 6
console.log(cb(4, 3, sub)); // Prints the string Result from the two numbers: 4 + 3 = 1
console.log(cb(3, 3, add())); // It prints an error, since it first calls the add function
                // with undefined, undefined which returns NaN and then it puts the numbers
                // 3 and 3 into the string, but then it tries to call a 
                // function called NaN with the parameters 3 and 3, 
                // and that is not possible, since it isn't a function
console.log(cb(3, "hh", add));// Prints the string Result from the two numbers: 3 and hh = 3hh

//Exercise 3
var cb1 = function (n1, n2, callback) {
    try {
        typeof n1 === "number"
        typeof n2 === "number"
        typeof callback === "function"
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } catch (e) {
        console.error("One of the provided parameters was not correct. Please try again!")
    }
};

//Exercise 4
function mul(n1, n2) {
    return n1 * n2;
}

console.log(cb(3, 5, mul)) //Prints the string Result from the two numbers: 3+5=15

//Exercise 5
console.log(cb(10,2, function(n1,n2) {
    return n1 / n2
}));  //Prints the string Result from the two numbers: 10+2=5



