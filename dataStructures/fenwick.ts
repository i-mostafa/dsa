export class FenWickTree {
  tree: number[];
  constructor(input: number[]) {
    this.tree = [...input];
    this.build();
  }

  build() {
    for (let i = 1; i < this.tree.length; i++) {
      const j = i + this.lsp(i);
      if (j < this.tree.length)
        this.tree[j] = (this.tree[j] ?? 0) + this.tree[i];
    }
  }

  prefixSum(i: number) {
    let sum = this.tree[0];
    while (i > 0) {
      sum += this.tree[i];
      i -= this.lsp(i);
    }
    return sum;
  }

  rangeSum(i: number, j: number) {
    const rightSide = this.prefixSum(j);
    if (i === 0) return rightSide;
    return rightSide - this.prefixSum(i - 1);
  }

  add(i: number, delta: number) {
    if (i === 0) return (this.tree[i] += delta);

    while (i < this.tree.length) {
      this.tree[i] += delta;
      i += this.lsp(i);
    }
  }

  private lsp(num: number) {
    return num & -num;
  }
}

const arr = [1, 2, 3, 4, 5, 6];

const fenWickTree = new FenWickTree(arr);

console.log(fenWickTree.tree);

console.log(fenWickTree.prefixSum(2));
console.log(fenWickTree.prefixSum(3));
console.log(fenWickTree.prefixSum(5));
console.log(fenWickTree.rangeSum(2, 5));
