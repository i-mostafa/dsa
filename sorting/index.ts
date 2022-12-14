import { DataGenerator } from "../data";
import { isSorted } from "../utils/isSorted";
import { Logger } from "../utils/logger";
import { bubbleSort } from "./bubbleSort";
import { bucketSort } from "./bucketSort";
import { combSort } from "./combSort";
import { countingSort, countingSortWithHashMap } from "./countingSort";
import { heapSort } from "./heapSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { pigeonholeSort } from "./pigeonholeSort";
import { quickSort } from "./quickSort";
import { radixSort } from "./radixSort";
import { selectionSort } from "./selectionSort";
import { shellSort, shellSort2 } from "./shellSort";

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
  toLogger(radixSort),
  toLogger(pigeonholeSort),
  toLogger(bucketSort),
  toLogger(shellSort),
  toLogger(shellSort2),
  toLogger(combSort),
];

Logger.table(table);
