import analyzeArray from './analyzeArray';

describe('Analyze array testing: ', () => {
  test('Simple array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
      average: 5.5,
      min: 1,
      max: 10,
      length: 10,
    });
  });
  test('array of length 1', () => {
    expect(analyzeArray([1])).toStrictEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });
  test('Empty Array', () => {
    expect(analyzeArray([])).toBe(null);
  });
  test('Array with Strings', () => {
    expect(analyzeArray(['1', 2, '3'])).toBe(null);
  });
});
