import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-avoid-multiple-acts',
  standalone: true,
  imports: [],
  templateUrl: './avoid-multiple-acts.component.html',
  styleUrl: './avoid-multiple-acts.component.css'
})
export class AvoidMultipleActsComponent {
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
}
