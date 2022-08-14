const getMax = (arr: number[]) =>
  arr.reduce((acc, curr) => (acc < curr ? curr : acc), -Infinity);
const digitAt = (number: number, pos: number) => {
  const str = number.toString();
  return +str[str.length - pos - 1] || 0;
};

const countingSortWithDigits = (arr: number[], digit: number) => {
  const countArr = new Array(10).fill(0);
  const result = new Array(arr.length);

  // fill count
  for (const el of arr) countArr[digitAt(el, digit)]++;

  // sum count

  for (let i = 1; i < countArr.length; i++) countArr[i] += countArr[i - 1];

  // shift count

  for (let i = countArr.length - 1; i > 0; i--) countArr[i] = countArr[i - 1];
  countArr[0] = 0;

  // fill result

  for (const el of arr) {
    const idx = digitAt(el, digit);
    result[countArr[idx]] = el;
    countArr[idx]++;
  }

  for (const idx in arr) arr[idx] = result[idx];
};

export const radixSort = (arr: number[]) => {
  const max = getMax(arr);
  const maxDigits = max.toString().length;
  for (let i = 0; i < maxDigits; i++) countingSortWithDigits(arr, i);
  return arr;
};
