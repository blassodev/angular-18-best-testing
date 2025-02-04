import {Component, computed, inject, signal} from '@angular/core';
import {ComplexMathService} from "../complex-math.service";

@Component({
  selector: 'app-isolated-tests-use-mock-objects',
  standalone: true,
  imports: [],
  templateUrl: './isolated-tests-use-mock-objects.component.html',
  styleUrl: './isolated-tests-use-mock-objects.component.css'
})
export class IsolatedTestsUseMockObjectsComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  operation = signal<string>('add');
  history = signal<string[]>([]);

  private complexMathService = inject(ComplexMathService);

  result = computed(() => {
    switch (this.operation()) {
      case 'add':
        return this.num1() + this.num2();
      case 'subtract':
        return this.num1() - this.num2();
      case 'multiply':
        return this.num1() * this.num2();
      case 'divide':
        return this.num2() !== 0 ? this.num1() / this.num2() : 'Cannot divide by 0';
      default:
        return 0;
    }
  });

  calculateToHistory() {
    this.history.update(result => [...result, `${this.num1()} ${this.operation()} ${this.num2()} = ${this.result()}`]);
    return this.result()
  }

  getAverageResult() {
    const numericResults = this.history().map(result => {
      const parts = result.split(' = '); // ["5 + 3", "8"]
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
