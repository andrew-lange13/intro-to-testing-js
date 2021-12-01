// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//// sayHello function

function sayHello(input) {
    if (input === true) {
        return "Hello, World!"
    } else if (input === " ") {
        return "Hello, World!"
    } else if (input) {
        return "Hello, " + input + "!"
    } else {
        return "Hello, World!"
    }
}

////    isFIve

function isFive(n) {
    return parseInt(n) === 5;
}

//////    isEven

function isEven(x) {
    return parseInt(x) % 2 === 0;
}

//// isVowel