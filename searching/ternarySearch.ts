export const ternarySearch = (
  arr: number[],
  target: number,
  offset = 0
): number => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? offset : -1;
  const div = Math.floor(arr.length / 3);

  if (target < arr[div])
    return ternarySearch(arr.slice(0, div), target, offset);
  if (target === arr[div]) return div + offset;
  if (target < arr[div * 2])
    return ternarySearch(arr.slice(div + 1, div * 2), target, offset + div + 1);
  if (target === arr[div * 2]) return div * 2 + offset;

  return ternarySearch(arr.slice(div * 2 + 1), target, offset + div * 2 + 1);
};
