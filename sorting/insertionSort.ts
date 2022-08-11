const moveToSortedPosition = (arr: number[], idx: number) => {
  let i = idx - 1;
  const value = arr[idx];
  while (i >= 0 && arr[i] > value) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[i + 1] = value;
};
export const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    moveToSortedPosition(arr, i);
  }
  return arr;
};
