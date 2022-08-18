export const combSort = (arr: number[]) => {
  let swapHappened = true;
  let g = arr.length;
  while (g > 1 || swapHappened) {
    g = Math.floor(g / 1.3);
    if (g < 1) g = 1;
    swapHappened = false;
    for (let i = 0; i < arr.length - g; i++) {
      if (arr[i + g] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i + g];
        arr[i + g] = temp;
        swapHappened = true;
      }
    }
  }
  return arr;
};
