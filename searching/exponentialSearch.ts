import { binarySearch } from "./binarySearch";

export const exponentialSearch = (arr: number[], target: number) => {
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < arr.length && arr[i] < target) i *= 2;

  const prev = i / 2;
  if (i > arr.length - 1) i = arr.length - 1;
  if (arr[i] === target) return i;
  if (i === arr.length) return -1;

  return binarySearch(arr.slice(prev, i), target, prev);
};
