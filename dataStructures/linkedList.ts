export class Node {
  constructor(public value: number, public next: Node | null = null) {}
}

export class DoublyNode extends Node {
  constructor(
    value: number,
    next: DoublyNode | null = null,
    public prv: DoublyNode | null = null
  ) {
    super(value, next);
  }
}

export abstract class List<T> {
  tail: T | null = null;
  head: T | null = null;

  abstract append(node: T): void;
  abstract search(value: number): T | null;
  abstract removeAt(pos: number): void;
  abstract remove(value: number): void;
}

export class LinkedList extends List<Node> {
  search(value: number): Node | null {
    let head = this.head;
    while (head) {
      if (head.value === value) return head;
    }
    return null;
  }
  removeAt(pos: number): void {
    let head = this.head;
    while (head && pos > 0) head = head.next;

    if (pos === 0) return;
    if (head?.next) {
      head.next = head.next?.next;
    }
  }
  remove(value: number): void {
    let head = this.head;
    while (head?.next && head.next.value !== value) head = head.next;

    if (head?.next) head.next = head.next.next;
  }
  append(node: Node) {
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
      return;
    }
    this.head = node;
    this.tail = node;
  }
}
