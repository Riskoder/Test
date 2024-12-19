import capitalizeFirstLetter from './01.FirstLetter';

describe('capitalizeFirstLetter', () => {
  test('First letter', () => {
    expect(capitalizeFirstLetter('hello, world!')).toBe('Hello, world!');
  });

  test('Empty arg', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('Number arg', () => {
    expect(capitalizeFirstLetter('123')).toBe('123');
  });

  test('Object arg', () => {
    expect(() => capitalizeFirstLetter({})).toThrow('Input must be a string');
  });

  test('Array arg', () => {
    expect(() => capitalizeFirstLetter([])).toThrow('Input must be a string');
  });
});
