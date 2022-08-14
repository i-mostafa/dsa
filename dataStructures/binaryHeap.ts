export class BinaryHeap {
  data: number[] = [];

  static buildHeap(
    arr: number[],
    check: (parent: number, child: number) => boolean
  ) {
    for (let i = this.parent(arr.length) - 1; i >= 0; i--)
      this.heapify(arr, arr.length, i, check);
    return arr;
  }

  static parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  static leftChild(parentIdx: number) {
    return 2 * parentIdx + 1;
  }

  static rightChild(parentIdx: number) {
    return this.leftChild(parentIdx) + 1;
  }

  static heapify(
    arr: number[],
    size: number,
    parentIdx: number,
    check: (parent: number, child: number) => boolean
  ) {
    const leftChildIdx = this.leftChild(parentIdx);
    const rightChildIdx = this.rightChild(parentIdx);

    let parentHolder = parentIdx;

    if (leftChildIdx < size && check(arr[parentHolder], arr[leftChildIdx]))
      parentHolder = leftChildIdx;
    if (rightChildIdx < size && check(arr[parentHolder], arr[rightChildIdx]))
      parentHolder = rightChildIdx;

    if (parentIdx !== parentHolder) {
      this.swap(arr, parentIdx, parentHolder);
      this.heapify(arr, size, parentHolder, check);
    }
  }

  static swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  static sort(arr: number[], order: "ASC" | "DESC" = "ASC") {
    const check = (parent: number, child: number) =>
      order === "DESC" ? parent > child : parent < child;

    this.buildHeap(arr, check);

    for (let i = arr.length - 1; i >= 0; i--) {
      this.swap(arr, i, 0);
      this.heapify(arr, i, 0, check);
    }
    return arr;
  }
}
