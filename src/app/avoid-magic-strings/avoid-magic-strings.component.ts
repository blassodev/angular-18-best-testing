import {Component, computed, inject, signal} from '@angular/core';
import {DIVISION_BY_ZERO_MESSAGE, Operation} from "./calculator.constants";
import {ComplexMathService} from "../complex-math.service";

@Component({
  selector: 'app-avoid-magic-strings',
  standalone: true,
  imports: [],
  templateUrl: './avoid-magic-strings.component.html',
  styleUrl: './avoid-magic-strings.component.css'
})
export class AvoidMagicStringsComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  operation = signal<Operation>(Operation.ADD);
  history = signal<string[]>([]);

  resultCalculate: number | string = 0;

  private complexMathService = inject(ComplexMathService);

  result = computed(() => {
    switch (this.operation()) {
      case Operation.ADD:
        return this.num1() + this.num2();
      case Operation.SUBTRACT:
        return this.num1() - this.num2();
      case Operation.MULTIPLY:
        return this.num1() * this.num2();
      case Operation.DIVIDE:
        return this.num2() !== 0 ? this.num1() / this.num2() : DIVISION_BY_ZERO_MESSAGE;
      default:
        return 0;
    }
  });

  calculate() {
    switch (this.operation()) {
      case 'add':
        this.resultCalculate = this.num1() + this.num2();
        break;
      case 'subtract':
        this.resultCalculate = this.num1() - this.num2();
        break;
      case 'multiply':
        this.resultCalculate = this.num1() * this.num2();
        break;
      case 'divide':
        this.resultCalculate = this.num2() !== 0 ? this.num1() / this.num2() : DIVISION_BY_ZERO_MESSAGE;
        break;
    }
  }

  calculateToHistory() {
    this.history.update(result => [...result, `${this.num1()} ${this.operation()} ${this.num2()} = ${this.result()}`]);
    return this.result()
  }

  getAverageResult() {
    const numericResults = this.history().map(result => {
      const parts = result.split(' = ');
      return parseFloat(parts[1]);
    }).filter(result => !isNaN(result));

    return numericResults.length === 0 ? 0 : numericResults.reduce((sum, result) => sum + result, 0) / numericResults.length;
  }

  calculatePower(base: number, exponent: number): number {
    return this.complexMathService.calculatePower(base, exponent);
  }

  calculateLogarithm(value: number, base: number): number {
    return this.complexMathService.calculateLogarithm(value, base);
  }
}
