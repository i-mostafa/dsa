export class SuffixArray {
  arr: { suffix: string; idx: number }[] = [];
  lcp: number[] = [];
  constructor(public str: string) {
    this.build();
  }
  build() {
    let i = this.str.length - 1;
    this.arr.push({ suffix: this.str[i], idx: 0 });
    i--;
    while (i >= 0) {
      const idx = this.str.length - i - 1;
      this.arr.push({ suffix: this.str[i] + this.arr[idx - 1].suffix, idx });
      i--;
    }

    this.arr.sort((a, b) => (a.suffix < b.suffix ? -1 : 1));
  }

  get indices() {
    return this.arr.map((s) => s.idx);
  }

  calcLcp() {
    this.lcp.push(0);
    for (let i = 1; i < this.arr.length; i++) {
      this.lcp.push(
        this.commonPrefix(this.arr[i - 1].suffix, this.arr[i].suffix)
      );
    }
  }

  commonPrefix(s1: string, s2: string) {
    const length = Math.min(s1.length, s2.length);
    let counter = 0;
    for (let i = 0; i < length; i++) {
      if (s1[i] === s2[i]) counter++;
      else return counter;
    }
    return counter;
  }

  get uniqueSubStrings() {
    const n = this.arr.length;
    const lcpSum = this.lcp.reduce((acc, curr) => acc + curr, 0);
    return (n * (n + 1)) / 2 - lcpSum;
  }
}

// const suffixArr = new SuffixArray("azaza");
// // suffixArr.build();
// suffixArr.calcLcp();
// console.log(suffixArr.arr);

// console.log(suffixArr.lcp);
// console.log(suffixArr.uniqueSubStrings);

const longestCommonSubStr = (strArr: string[]) => {
  let s = "";
  for (let idx in strArr) {
    s += strArr[idx] + String.fromCharCode("A".charCodeAt(0) - +idx);
  }
  const suffixArr = new SuffixArray(s);
  suffixArr.calcLcp();
  console.log(suffixArr.lcp, suffixArr.arr);
  let i = 0;
  const groups = {};

  while (
    i < suffixArr.arr.length &&
    suffixArr.arr[i].suffix.charCodeAt(0) < "A".charCodeAt(0)
  )
    i++;
  if (i === suffixArr.arr.length - 1) return "";

  let j = i;
};

function getGroup(s: string) {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < "A".charCodeAt(0)) return s[i];
  }
  return;
}
console.log(longestCommonSubStr(["abc", "bca", "bc"]));
