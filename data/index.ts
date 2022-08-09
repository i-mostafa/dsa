import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

enum Files {
  ARRAY = "arr.json",
}

const defaults = {
  randomStart: 0,
  randomEnd: 1000,
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

  static getArrData({ isNew = false, size = defaults.size } = {}): number[] {
    let arr: number[] | null = this.cachedArr;
    if (isNew) arr = this.generateRandomNumbers({ size });

    if (arr?.length < size) arr = null;

    this.cachedArr = arr || this.generateRandomNumbers({ size });

    return this.cachedArr;
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

  static get cachedArr(): number[] {
    return this.arrData || FileHandler.readJson(Files.ARRAY);
  }

  static set cachedArr(arr) {
    this.arrData = arr;
    FileHandler.writeJson(Files.ARRAY, arr);
  }
}
