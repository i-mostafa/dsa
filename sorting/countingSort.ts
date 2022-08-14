const getMax = (arr: number[]) =>
  arr.reduce((acc, curr) => (acc < curr ? curr : acc), -Infinity);

export const countingSort = (arr: number[]) => {
  const maxNumber = getMax(arr);
  const countArr = new Array(maxNumber + 1).fill(0);
  const result = new Array(arr.length);

  // fill count
  for (const el of arr) countArr[el]++;

  // sum count

  for (let i = 1; i < countArr.length; i++) countArr[i] += countArr[i - 1];

  // shift count

  for (let i = countArr.length - 1; i > 0; i--) countArr[i] = countArr[i - 1];
  countArr[0] = 0;

  // fill result

  for (const el of arr) {
    result[countArr[el]] = el;
    countArr[el]++;
  }
  return result;
};

class CustomHashmap {
  data: number[] = [];
  map: Record<string, number> = {};
  maxIdx: number = -Infinity;

  set(idx: number, value: number) {
    if (this.map.hasOwnProperty(idx)) return (this.data[this.map[idx]] = value);
    this.add(idx, value);
  }

  add(idx: number, value: number) {
    this.data.push(value);
    this.map[idx] = this.data.length - 1;
    if (idx > this.maxIdx) this.maxIdx = idx;
  }

  get(idx: number) {
    return this.map.hasOwnProperty(idx) ? this.data[this.map[idx]] : 0;
  }

  inc(idx: number, value = 1) {
    if (!this.map.hasOwnProperty(idx)) return this.add(idx, value);
    this.data[this.map[idx]] += value;
  }

  shiftRight() {}

  get length() {
    return this.data.length;
  }

  static from(arr: number[]) {
    const map = new CustomHashmap();
    for (const el of arr) map.inc(el);
    return map;
  }
}

export const countingSortWithHashMap = (arr: number[]) => {
  const countMap = CustomHashmap.from(arr);
  const result = new Array(arr.length);
  // sum
  for (let i = 1; i <= countMap.maxIdx; i++)
    countMap.inc(i, countMap.get(i - 1) as number);

  // shift

  for (let i = countMap.maxIdx; i > 0; i--)
    countMap.set(i, countMap.get(i - 1));

  countMap.set(0, 0);

  for (const el of arr) {
    result[countMap.get(el)] = el;
    countMap.inc(el);
  }
  return result;
};
