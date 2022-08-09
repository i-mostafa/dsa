import { DataGenerator } from "../data";
import { Logger } from "../utils/logger";
import { binarySearch, iterativeBinarySearch } from "./binarySearch";
import {
  biDirectionalLinearSearch,
  linearSearch,
  recursiveLinearSearch,
} from "./linearSearch";

const bigArray = DataGenerator.getArrData({ size: 5000 });
const sortedBigArray = DataGenerator.getSortedArrData({ size: 5000 });
const table = [
  {
    name: "linearSearch",
    func: () => linearSearch(bigArray, 6),
  },
  {
    name: "biDirectionalLinearSearch",
    func: () => biDirectionalLinearSearch(bigArray, 6),
  },
  {
    name: "recursiveLinearSearch",
    func: () => recursiveLinearSearch(bigArray, 6),
  },
  {
    name: "binarySearch",
    func: () => binarySearch(sortedBigArray, 100),
  },
  {
    name: "iterativeBinarySearch",
    func: () => iterativeBinarySearch(sortedBigArray, 100),
  },
];
Logger.table(table);
