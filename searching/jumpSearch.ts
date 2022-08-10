import { linearSearch } from "./linearSearch";

export const jumpSearch = (arr: number[], target: number): number => {
  const jump = Math.floor(Math.sqrt(arr.length));

  // find a slot containing the target
  let i = 0;
  while (i < arr.length && arr[i] < target) {
    i += jump;
  }
  const low = i - jump;
  // check if i is out of boundary
  if (i > arr.length - 1) i = arr.length - 1;
  // check arr[i]
  if (arr[i] === target) return i;
  // return -1 if i points to the last element
  if (i === arr.length - 1) return -1;

  // linear search to find the target
  const idx = linearSearch(arr.slice(low, i), target);
  if (idx !== -1) return low + idx;
  return -1;
};
