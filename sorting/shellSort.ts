import { insertionSort } from "./insertionSort";

export const shellSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  let gap = Math.floor(arr.length / 2);
  for (let g = gap; g > 0; g = Math.floor(g / 2)) {
    let div = 0;
    let i = 0;
    while (i < arr.length - g) {
      if (arr[i + g] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i + g];
        arr[i + g] = temp;
      }

      if (div < Math.floor(i / g)) i += 1 + g;
      else {
        i += 1;
      }
    }
  }
  insertionSort(arr);
  return arr;
};
export function shellSort2(arr: number[]) {
  let n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for (let i = gap; i < n; i += 1) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      let temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];

      // put temp (the original a[i]) in its correct
      // location
      arr[j] = temp;
    }
  }
  return arr;
}
