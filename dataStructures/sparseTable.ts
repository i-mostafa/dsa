const isPowerOfTwe = (num: number) => num && !(num & (num - 1));

export class SparseTable {
  sparseTable: number[][];
  sparseTableDepth: number;
  constructor(public arr: number[], public query = Math.min) {
    this.sparseTableDepth = Math.floor(Math.log2(arr.length)) + 1;

    this.sparseTable = [...Array(this.sparseTableDepth)].map((_) =>
      Array(arr.length).fill(0)
    );
    this.build();
  }

  build() {
    for (let i: number = 0; i < this.sparseTableDepth; i++) {
      const windowWidth = 1 << i;

      for (let j: number = 0; j < this.arr.length; j++) {
        if (j + windowWidth > this.arr.length - 1) break;
        this.sparseTable[i][j] = this.query(
          ...this.arr.slice(j, j + windowWidth)
        );
      }
    }
  }

  range(i: number, j: number) {
    let island = j - i + 1;

    const log = Math.floor(Math.log2(island));
    const nearestPowerOfTwo = 1 << log;

    if (nearestPowerOfTwo === island) return this.sparseTable[log][i];

    return this.query(
      this.sparseTable[log][i],
      this.sparseTable[log][j - nearestPowerOfTwo]
    );
  }
}

const minSparse = new SparseTable([5, 3, 4, 1, 4, 7]);

console.log(minSparse.range(0, 2));
console.log(minSparse.range(1, 2));
console.log(minSparse.range(1, 5));
