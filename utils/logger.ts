export interface LoggerElement {
  name: string;
  func: Function;
  check?: Function;
}
const markIfLast = (v: any, isLast: boolean) => (isLast ? `>>${v}<<` : v);
export class Logger {
  static log({ name = "", func = () => {}, depth = null } = {}) {
    console.time(name);
    const value = func();
    console.dir(value, { depth });
    console.timeEnd(name);
  }
  static table(arr: LoggerElement[] = []) {
    const l = arr.length - 1;
    const table = arr
      .map(({ name, func, check }, i) => {
        const start = performance.now();
        const value = func();
        const end = performance.now();
        let checked = false;
        if (check) checked = check(value);
        const time = Number((end - start).toFixed(2));
        return {
          name: markIfLast(name, i === l),
          value,
          "time (ms)": time,
          checked,
        };
      })
      .sort((a, b) => a["time (ms)"] - b["time (ms)"])
      .reduce((acc, { name, ...rest }) => {
        if (name.startsWith(">>"))
          rest["time (ms)"] = markIfLast(rest["time (ms)"], true);
        acc[name] = rest;
        return acc;
      }, {} as Record<string, any>);

    console.table(table);
  }
}
