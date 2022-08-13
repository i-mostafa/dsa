export class BinaryHeap {
  private data: number[] = [];

  get length() {
    return this.data.length;
  }

  get heapArr() {
    return this.data;
  }

  static leftChild(i: number) {
    return i * 2 + 1;
  }

  static rightChild(i: number) {
    return this.leftChild(i) + 1;
  }

  insert(num: number) {
    this.data.push(num);
    let i = this.data.length - 1;
    this.heapifyUp(i);
  }
  delete(i: number) {
    BinaryHeap.extractElement(this.data, i);
  }

  private heapifyUp(i: number) {
    let parent = BinaryHeap.parent(i);
    while (i > 0 && this.data[i] < this.data[parent]) {
      BinaryHeap.swap(this.data, i, parent);
      i = parent;
      parent = BinaryHeap.parent(parent);
    }

    const leftChild = BinaryHeap.leftChild(i);
    const rightChild = BinaryHeap.rightChild(i);
    if (this.data[leftChild] > this.data[rightChild])
      BinaryHeap.swap(this.data, rightChild, leftChild);
  }

  static parent(i: number) {
    if (i < 1) return 0;
    return Math.floor((i - 1) / 2);
  }
  static heapifyDown(arr: number[], i: number) {
    const { leftChildIdx, rightChildIdx } = this.heapifyNode(arr, i);
    if (leftChildIdx < arr.length) this.heapifyDown(arr, leftChildIdx);
    if (rightChildIdx < arr.length) this.heapifyDown(arr, rightChildIdx);
  }

  static heapifyNode(arr: number[], parentIdx: number) {
    const leftChildIdx = BinaryHeap.leftChild(parentIdx);
    const rightChildIdx = BinaryHeap.rightChild(parentIdx);

    if (leftChildIdx < arr.length && arr[parentIdx] > arr[leftChildIdx])
      this.swap(arr, parentIdx, leftChildIdx);
    if (
      leftChildIdx < arr.length &&
      rightChildIdx < arr.length &&
      arr[leftChildIdx] > arr[rightChildIdx]
    )
      this.swap(arr, leftChildIdx, rightChildIdx);
    if (leftChildIdx < arr.length && arr[parentIdx] > arr[leftChildIdx])
      this.swap(arr, parentIdx, leftChildIdx);
    return { leftChildIdx, rightChildIdx, parentIdx };
  }

  static getValue(
    arr: number[],
    indexes: number[],
    tester: (last: number, curr: number) => boolean
  ) {
    const result = {
      idx: indexes[0],
      value: arr[indexes[0]],
    };
    for (let i = 1; i < indexes.length; i++) {
      if (tester(result.value, arr[indexes[i]])) {
        result.value = arr[indexes[i]];
        result.idx = indexes[i];
      }
    }
    return result;
  }

  static extractElement(arr: number[], i: number) {
    if (arr.length === 0 || i > arr.length) return;
    const element = arr[i];
    const lastElement = arr.pop() as number;
    arr[i] = lastElement;

    BinaryHeap.heapifyDown(arr, this.parent(i));
    return element;
  }

  static swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
