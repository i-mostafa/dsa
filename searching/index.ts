import { DataGenerator } from "../data";
import { Logger } from "../utils/logger";
import { binarySearch, iterativeBinarySearch } from "./binarySearch";
import { exponentialSearch } from "./exponentialSearch";
import { jumpSearch } from "./jumpSearch";
import {
  biDirectionalLinearSearch,
  linearSearch,
  recursiveLinearSearch,
} from "./linearSearch";

const bigArray = DataGenerator.getArrData({ size: 5000 });
const sortedBigArray = DataGenerator.getSortedArrData({ size: 5000 });

const target = 100;

const unsortedTable = [
  {
    name: "linearSearch",
    func: () => linearSearch(bigArray, target),
  },
  {
    name: "biDirectionalLinearSearch",
    func: () => biDirectionalLinearSearch(bigArray, target),
  },
  {
    name: "recursiveLinearSearch",
    func: () => recursiveLinearSearch(bigArray, target),
  },
];

const sortedTable = [
  {
    name: "binarySearch",
    func: () => binarySearch(sortedBigArray, target),
  },
  {
    name: "iterativeBinarySearch",
    func: () => iterativeBinarySearch(sortedBigArray, target),
  },
  {
    name: "jumpSearch",
    func: () => jumpSearch(sortedBigArray, target),
  },
  {
    name: "exponentialSearch",
    func: () => exponentialSearch(sortedBigArray, target),
  },
];
Logger.table(unsortedTable);
Logger.table(sortedTable);
