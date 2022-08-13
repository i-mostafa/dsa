import { BinaryHeap } from "../dataStructures/binaryHeap";

export const heapSort = (arr: number[]): number[] => {
  const heap = new BinaryHeap();

  // fill the heap

  for (const el of arr) {
    heap.insert(el);
  }

  const heapArr = [...heap.heapArr];
  // extract elements
  let i = 0;
  while (i < arr.length) {
    arr[i] = BinaryHeap.extractElement(heapArr, 0) as number;
    i++;
  }
  return arr;
};
