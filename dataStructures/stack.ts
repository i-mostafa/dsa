export class Stack {
  private data: number[];

  constructor() {
    this.data = [];
  }

  pop() {
    if (this.data.length) return this.data.pop();
    else throw new Error("Stack is Empty");
  }

  push(v: number) {
    this.data.push(v);
  }

  at(idx: number) {
    if (idx > this.data.length - 1) throw new Error("Out of range");
    return this.data[idx];
  }
}
