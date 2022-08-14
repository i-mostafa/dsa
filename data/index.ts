import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

enum Files {
  ARRAY = "arr.json",
  SORTED_ARR = "sortedArr.json",
}

const defaults = {
  randomStart: 0,
  randomEnd: 100000,
  size: 3000,
};

export class FileHandler {
  static readJson(fileName: string) {
    try {
      return JSON.parse(readFileSync(join(__dirname, fileName), "utf-8"));
    } catch (e) {
      console.log("error when reading from " + fileName, e);
      return null;
    }
  }

  static writeJson(fileName: string, json: object) {
    try {
      writeFileSync(join(__dirname, fileName), JSON.stringify(json));
    } catch (e) {
      console.log("error when writing to " + fileName, e);
    }
  }
}
export class DataGenerator {
  static arrData: number[];
  static sortedArrData: number[];

  static getArrData({ isNew = false, size = defaults.size } = {}): number[] {
    let arr: number[] | null = this.cachedArr;
    if (isNew) arr = this.generateRandomNumbers({ size });

    if (arr?.length !== size) arr = null;

    this.cachedArr = arr || this.generateRandomNumbers({ size });

    return this.cachedArr;
  }

  static getSortedArrData({
    isNew = false,
    size = defaults.size,
  } = {}): number[] {
    let arr: number[] | null = this.cachedSortedArr;
    if (isNew) arr = this.generateSortedArr({ size });

    if (arr?.length < size) arr = null;

    this.cachedSortedArr = arr || this.generateSortedArr({ size });

    return this.cachedSortedArr;
  }

  private static generateRandomNumber({
    start = defaults.size,
    end = defaults.randomEnd,
  } = {}) {
    return Math.round(Math.random() * end + start);
  }
  private static generateRandomNumbers({
    start = defaults.randomStart,
    end = defaults.randomEnd,
    size = defaults.size,
  } = {}) {
    return [...Array(size)].map(() =>
      this.generateRandomNumber({ start, end })
    );
  }

  private static generateSortedArr({ size = defaults.size } = {}) {
    return [...Array(size)].map((_, i) => i);
  }

  static get cachedArr(): number[] {
    return this.arrData || FileHandler.readJson(Files.ARRAY);
  }
  static get cachedSortedArr(): number[] {
    return this.sortedArrData || FileHandler.readJson(Files.SORTED_ARR);
  }

  static set cachedArr(arr) {
    this.arrData = arr;
    FileHandler.writeJson(Files.ARRAY, arr);
  }

  static set cachedSortedArr(arr) {
    this.sortedArrData = arr;
    FileHandler.writeJson(Files.SORTED_ARR, arr);
  }
}
