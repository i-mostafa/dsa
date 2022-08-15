export const pigeonholeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;
  // get range and min
  let min = Infinity,
    max = -Infinity;
  for (const el of arr) {
    if (el > max) max = el;
    if (el < min) min = el;
  }

  const range = max - min + 1;

  const stack = new Array(range).fill(0);

  // fill the stack
  for (let el of arr) stack[el - min]++;

  // fill the result

  let index = 0;
  for (const idx in stack) while (stack[idx]-- > 0) arr[index++] = +idx + min;
  return arr;
};
