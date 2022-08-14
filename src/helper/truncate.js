export const Truncate = (str) => {
    return str.length > 10 && str.slice(0, 8) + '...';
}