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
        expect(typeof sayHello()).toBeDefined();
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
        expect(isFive()).toBeDefined();
    });
    it('should return boolean', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return boolean', function () {
        expect(isFive(!5)).toBe(false);
    });
    it('should return string 5 as true', function () {
        expect(isFive("5")).toBe(true)
    });
});
