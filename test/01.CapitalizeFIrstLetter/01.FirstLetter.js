export default function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) return null;

  return str[0].toUpperCase() + str.slice(1);
}
