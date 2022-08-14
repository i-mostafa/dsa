import { BinaryHeap } from "../dataStructures/binaryHeap";

export const heapSort = (arr: number[]): number[] => {
  BinaryHeap.sort(arr);
  return arr;
};
