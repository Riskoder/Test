import Calculator from './calculator';

describe('Calculator class Testing: ', () => {
  test('add with valid numbers', () => {
    expect(Calculator.add(3, 2)).toBe(5);
  });

  test('Add with invalid typeof', () => {
    expect(Calculator.add('1', 2)).toBe(null);
  });

  test('Subtract 2 numbers', () => {
    expect(Calculator.subtract(5, 2)).toBe(3);
  });

  test('Divide 2 valid Numbers', () => {
    expect(Calculator.divide(10, 3)).toBe(3.33);
  });

  test('Divide by 0', () => {
    expect(Calculator.divide(10, 0)).toBe('infinity');
  });

  test('Multiply 2 valid numbers', () => {
    expect(Calculator.multiply(10, 5)).toBe(50);
  });
});
