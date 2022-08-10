import { DataGenerator } from "../data";
import { Logger } from "../utils/logger";
import { binarySearch, iterativeBinarySearch } from "./binarySearch";
import { exponentialSearch } from "./exponentialSearch";
import { interpolationSearch } from "./interpolationSearch";
import { jumpSearch } from "./jumpSearch";
import {
  biDirectionalLinearSearch,
  linearSearch,
  recursiveLinearSearch,
} from "./linearSearch";
import { ternarySearch } from "./ternarySearch";

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
    name: "linearSearch",
    func: () => linearSearch(sortedBigArray, target),
  },
  {
    name: "biDirectionalLinearSearch",
    func: () => biDirectionalLinearSearch(sortedBigArray, target),
  },
  {
    name: "recursiveLinearSearch",
    func: () => recursiveLinearSearch(sortedBigArray, target),
  },
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
  {
    name: "ternarySearch",
    func: () => ternarySearch(sortedBigArray, target),
  },
  {
    name: "interpolationSearch",
    func: () => interpolationSearch(sortedBigArray, target),
  },
];
Logger.table(unsortedTable);
Logger.table(sortedTable);
