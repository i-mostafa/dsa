export interface LoggerElement {
  name: string;
  func: Function;
}

export class Logger {
  static log({ name = "", func = () => {}, depth = null } = {}) {
    console.time(name);
    const value = func();
    console.dir(value, { depth });
    console.timeEnd(name);
  }
  static table(arr: LoggerElement[] = []) {
    const table = arr.reduce((acc, { name, func }) => {
      const start = performance.now();
      const value = func();
      const end = performance.now();
      acc[name] = { value, time: (end - start).toFixed(2) + " ms" };
      return acc;
    }, {} as { [key: string]: any });

    console.table(table);
  }
}
