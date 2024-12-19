export default function caesarCipher(str, shift) {
  if (typeof str !== 'string') return null;

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;

  shift = shift % 26;

  return str
    .split('')
    .map((char) => {
      const isLowerCase = char === char.toLowerCase();
      const baseAlphabet = isLowerCase ? alphabet : alphabet.toUpperCase();

      const index = baseAlphabet.indexOf(char);

      if (index === -1) {
        return char;
      }

      const newIndex = (index + shift) % alphabetLength;

      return baseAlphabet[newIndex];
    })
    .join('');
}
