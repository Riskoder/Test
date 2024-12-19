export default function analyzeArray(arr) {
  const hasString = arr.some((element) => typeof element !== 'number');
  if (!Array.isArray(arr) || arr.length === 0 || hasString) return null;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const length = arr.length;

  const average = arr.reduce((acc, num) => acc + num, 0) / length;

  return {
    average,
    min,
    max,
    length,
  };
}
