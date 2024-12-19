export default function reverseString(item) {
  if (typeof item !== 'string') {
    return null;
  }

  if (item.length === 0) {
    return '';
  }

  return item.split('').reverse().join('');
}
