import caesarCipher from './caesarCipher';

describe('Caesar Cipher test: ', () => {
  test('Simple letters', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('Numbers in String', () => {
    expect(caesarCipher('123', 3)).toBe('123');
  });

  test('Empty String', () => {
    expect(caesarCipher('', 1)).toBe('');
  });

  test('Number as Args', () => {
    expect(caesarCipher(123, 1)).toBe(null);
  });
});
