// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

///sayHello

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBeDefined();
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(" ")).toBe("Hello, World!");
    });
});

/// iFive

describe("isFive", function (){
    it('should exist', function () {
        expect(isFive).toBeDefined();
    });
    it('should return boolean', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return string 5 as true', function () {
        expect(isFive("5")).toBe(true)
    });
});

///////
////   isEven

describe("isEven", function (){
    it('should be a defined function', function () {
        expect(isEven).toBeDefined();
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is passed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when 3 is passed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is passed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when infinity is passed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is passed', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed with no argument', function () {
        expect(isEven()).toBe(false);
    });
});

/////// isVowel

describe("isVowel", function (){
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when "a" is passed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is passed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is passed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 is passed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true or false is passed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when "banana" is passed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when no argument is passed', function () {
        expect(isVowel()).toBe(false);
    });
})


///// add

describe("add", function (){
    it('should return 5 when 2 and 3 are passed', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when -3 and -9 are passed', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when "5" and 6 are passed', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when "-4" and "10" are passed', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when "banana" and "split" are passed', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when 2 and "apples" are passed', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when no argument is passed', function () {
        expect(add()).toBeNaN();
    });
})