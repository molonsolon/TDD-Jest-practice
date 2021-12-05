import index, { 
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
 } from './index'

// describe('capitalize', () => {
//   it('return string with first char capitalized', () => {
//     expect(capitalize('boat')).toBe('Boat');
//   });
//   it('should not accept numbers', () => {
//     expect(capitalize(4)).toBeNull();
//   });
//   it('should not accept first char as number', () => {
//     expect(capitalize('4mulate')).toBeUndefined();
//   })
// });

// describe('reverseString', () => {
//   it('should return a reversed string', () => {
//     expect(reverseString('home')).toBe('emoh');
//     expect(reverseString('Miter saw')).toBe('was retiM')
//   });
//   it('should not accept numbers', () => {
//     expect(reverseString(4)).toBeNull();
//   });
// });

// describe('calculator', () => {
//   it('should return result of basic operations', () => {
//     expect(calculator.add(3, 4)).toEqual(7);
//     expect(calculator.subtract(3, 4)).toEqual(-1);
//     expect(calculator.multiply(3, 4)).toEqual(12);
//     expect(calculator.divide(12, 4)).toEqual(3);
//   });
//   it('should only accept numbers', () => {
//     expect(calculator.add('a','b')).toBeNaN();
//   });
// });

// describe('caesarCipher', () => {
//   it('should return a string with chars shifted', () => {
//     expect(caesarCipher('hello')).toBe('ifmmp');
//     expect(caesarCipher('Fall Down')).toBe('Gbmm Epxo');
//     expect(caesarCipher(`don't worry about it!`)).toBe(`epo'u xpssz bcpvu ju!`);
//   });
// });

describe('analyzeArray', () => {
  it('should return an object with average, min, max, and length props', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(
      {average: 4, min: 1, max: 8, length: 6}
    );
  });
  it('should only accept numbers within given array', () => {
    expect(analyzeArray(['a','b','c'])).toBeNull();
  });
});