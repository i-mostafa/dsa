import { BinaryHeap } from "./binaryHeap";

const heap = new BinaryHeap();

heap.insert(1);
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(9);
heap.insert(6);
heap.insert(0);
heap.insert(3);

console.log(heap.heapArr);

heap.delete(0);
console.log(heap.heapArr);
