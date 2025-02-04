import {Component, computed, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-aaa-pattern',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aaa-pattern.component.html',
  styleUrl: './aaa-pattern.component.css'
})
export class AaaPatternComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  operation = signal<string>('add');

  resultCalculate: number | string = 0;


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
        this.resultCalculate = this.num2() !== 0 ? this.num1() / this.num2() : 'Cannot divide by 0';
        break;
    }
  }
}
