import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-avoid-using-complex-logic',
  standalone: true,
  imports: [],
  templateUrl: './avoid-using-complex-logic.component.html',
  styleUrl: './avoid-using-complex-logic.component.css'
})
export class AvoidUsingComplexLogicComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  operation = signal<string>('add');
  history = signal<string[]>([]);

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
}
