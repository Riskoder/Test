import reverseString from './02.reverseString';

describe('Reverse String Function Test: ', () => {
  test('reverse a String', () => {
    expect(reverseString('String')).toBe('gnirtS');
  });

  test('reverse a String of numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('Type Numberic args', () => {
    expect(reverseString(12345)).toBe(null);
  });

  test('Empty String', () => {
    expect(reverseString('')).toBe('');
  });

  test('Empty args', () => {
    expect(reverseString()).toBe(null);
  });

  test('Obj args', () => {
    expect(reverseString({})).toBe(null);
  });
});
