import React, { Component } from "react";
export class ComponentFunctions extends Component {
  static greet(name: string): string {
    return `Hello, ${name}!`;
  }

  static calculateSum(a: number, b: number): number {
    return a + b;
  }

  static formatDate(date: Date): string {
    return date.toISOString();
  }
  static formatCurrency(amount: number): string {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  static generateUniqueId(prefix: string): string {
    const uniqueId = `${prefix}-${Date.now()}`;
    return uniqueId;
  }
}
