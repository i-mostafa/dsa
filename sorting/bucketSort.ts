const getMax = (arr: number[]) =>
  arr.reduce((acc, curr) => (acc < curr ? curr : acc), -Infinity);

export const bucketSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const max = getMax(arr);
  const getIdx = (val: number) => {
    if (val < 0) return Math.floor(val * (arr.length - 1));
    return Math.floor((val / max) * (arr.length - 1));
  };

  const buckets: number[][] = [...Array(arr.length)].map(() => []);

  for (const el of arr) buckets[getIdx(el)].push(el);

  let index = 0;
  for (const list of buckets)
    list.sort((a, b) => a - b).forEach((num) => (arr[index++] = num));

  return arr;
};
