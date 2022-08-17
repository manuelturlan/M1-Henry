const { checkSeatStatus, getRowNumber } = require('../homework');

it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
});

it('Must be a string as parameter', () => {
    expect(() => checkSeatStatus("A")).toThrow(new TypeError("First parameter must be a string"));
});

it('Second parameter must be a number as parameter', () => {
    expect(() => checkSeatStatus("D", "4")).toThrow(new TypeError("Second parameter must be a number"));
});

it('getRowNumber is a function', () => {
    expect(typeof getRowNumber).toBe('function');
});

it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  
it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
});