export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  if (arr.length === 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // merge stage
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j]);
      j++;
      continue;
    }

    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
      continue;
    }

    result.push(right[j]);
    result.push(left[i]);
    i++;
    j++;
  }

  if (i < left.length) result.push(...left.slice(i));
  if (j < right.length) result.push(...right.slice(j));

  return result;
};
