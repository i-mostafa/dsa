import { DataGenerator } from "../data";
import { Logger } from "../utils/logger";
import {
  biDirectionalLinearSearch,
  linearSearch,
  recursiveLinearSearch,
} from "./linearSearch";

const bigArray = DataGenerator.getArrData({ size: 5000 });

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
];
Logger.table(table);
