export const linearSearch = (arr: number[], target: number): number => {
  for (const i in arr) {
    if (arr[i] === target) return Number(i);
  }
  return -1;
};

export const biDirectionalLinearSearch = (
  arr: number[] = [],
  target: number
): number => {
  let right = arr.length - 1;
  let left = 0;
  while (right > left) {
    if (arr[right] === target) return right;
    if (arr[left] === target) return left;
    right++;
    left++;
  }
  return -1;
};

export const recursiveLinearSearch = (
  arr: number[] = [],
  target: number,
  offset = 0
): number => {
  if (arr.length === 0) return -1;
  if (arr[0] === target) return offset;
  if (arr[arr.length - 1] === target) return arr.length - 1 + offset;
  return recursiveLinearSearch(arr.slice(1, -2), target, offset + 1);
};
