import { DataGenerator } from "../data";
import { isSorted } from "../utils/isSorted";
import { Logger } from "../utils/logger";
import { bubbleSort } from "./bubbleSort";
import { countingSort, countingSortWithHashMap } from "./countingSort";
import { heapSort } from "./heapSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { selectionSort } from "./selectionSort";

const bigArray = DataGenerator.getArrData({ size: 5000 });

const toLogger = (func: Function, input = bigArray) => ({
  name: func.name,
  func: () => func([...input]),
  check: isSorted([...input], func.name),
});

const table = [
  toLogger(selectionSort),
  toLogger(insertionSort),
  toLogger(mergeSort),
  toLogger(quickSort),
  toLogger(bubbleSort),
  toLogger(heapSort),
  toLogger(countingSort),
  toLogger(countingSortWithHashMap),
];

Logger.table(table);
