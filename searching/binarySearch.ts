export const binarySearch = (
  arr: number[],
  target: number,
  offset = 0
): number => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? offset : -1;

  const midIdx = Math.ceil(arr.length / 2);

  if (arr[midIdx] === target) return midIdx + offset;

  if (arr[midIdx] > target)
    return binarySearch(arr.slice(0, midIdx), target, offset);
  return binarySearch(arr.slice(midIdx + 1), target, offset + midIdx + 1);
};

export const iterativeBinarySearch = (arr: number[], target: number) => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? 0 : -1;

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midIdx = Math.ceil((right - left) / 2) + left;
    if (arr[midIdx] === target) return midIdx;

    if (arr[midIdx] > target) right = midIdx - 1;
    if (arr[midIdx] < target) left = midIdx + 1;
  }
  return -1;
};
