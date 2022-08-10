/**
 * equation is l + ((x- arr[l]) * (r - l)/ (arr[r] - arr[l]))
 * @param arr
 * @param target
 * @param offset
 * @returns
 */

export const interpolationSearch = (
  arr: number[],
  target: number,
  offset = 0
): number => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? offset : -1;

  const midIdx =
    ((target - arr[0]) * (arr.length - 1)) / (arr[arr.length - 1] - arr[0]);

  if (arr[midIdx] === target) return midIdx + offset;

  if (arr[midIdx] > target)
    return interpolationSearch(arr.slice(0, midIdx), target, offset);
  return interpolationSearch(
    arr.slice(midIdx + 1),
    target,
    offset + midIdx + 1
  );
};
