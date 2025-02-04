import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComplexMathService {
  calculatePower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  calculateLogarithm(value: number, base: number): number {
    if (value <= 0 || base <= 0 || base === 1) {
      throw new Error('Invalid logarithm calculation');
    }
    return Math.log(value) / Math.log(base);
  }
}
