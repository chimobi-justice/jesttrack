export const Truncate = (str, max = 8) => {
  return str.length > 10 && str.slice(0, max) + '...';
}