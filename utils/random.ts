export class Random {
  static randomIntBetween(from = 0, to = 100) {
    return Math.floor(Math.random() * to + from);
  }
}
