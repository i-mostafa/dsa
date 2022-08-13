import { Random } from "../utils/random";

export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const idx = Random.randomIntBetween(0, arr.length - 1);
  const pivot = arr[idx];

  const larger = [],
    lower = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) continue;
    if (arr[i] > pivot) {
      larger.push(arr[i]);
      continue;
    }
    lower.push(arr[i]);
  }

  return [...quickSort(lower), pivot, ...quickSort(larger)];
};
