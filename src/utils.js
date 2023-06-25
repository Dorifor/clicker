// From https://www.30secondsofcode.org/js/s/mapped-array-sum/
export const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0);