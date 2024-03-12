class ComponentFunctions {
  static greet(name: string): string {
    return `Hello, ${name}!`;
  }

  static calculateSum(a: number, b: number): number {
    return a + b;
  }

  static formatDate(date: Date): string {
    return date.toISOString();
  }
  static currencyFormat(num) {
    return "Rp" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
