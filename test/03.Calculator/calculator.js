export default class Calculator {
  static validateNumbers(...args) {
    return args.every((arg) => typeof arg === 'number');
  }

  static add(a, b) {
    if (!this.validateNumbers(a, b)) return null;
    return a + b;
  }

  static subtract(a, b) {
    if (!this.validateNumbers(a, b)) return null;
    return a - b;
  }

  static divide(a, b) {
    if (!this.validateNumbers(a, b)) return null;
    if (b === 0) return 'infinity';

    return Math.round((a / b) * 100) / 100;
  }

  static multiply(a, b) {
    if (!this.validateNumbers(a, b)) return null;
    return a * b;
  }
}
