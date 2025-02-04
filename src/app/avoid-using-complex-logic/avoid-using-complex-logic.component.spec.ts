import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidUsingComplexLogicComponent } from './avoid-using-complex-logic.component';

describe('AvoidUsingComplexLogicComponent', () => {
  let component: AvoidUsingComplexLogicComponent;
  let fixture: ComponentFixture<AvoidUsingComplexLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvoidUsingComplexLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoidUsingComplexLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Example bad
  it('should calculate average result correctly', () => {
    const operations = [
      { num1: 5, num2: 3, op: 'add' },
      { num1: 10, num2: 2, op: 'multiply' },
      { num1: 8, num2: 4, op: 'subtract' },
      { num1: 15, num2: 3, op: 'divide' }
    ];

    operations.forEach(op => {
      component.num1.set(op.num1);
      component.num2.set(op.num2);
      component.operation.set(op.op);
      component.calculateToHistory();
    });

    const expectedAverage = operations.reduce((sum, op) => {
      let result;
      switch (op.op) {
        case 'add': result = op.num1 + op.num2; break;
        case 'subtract': result = op.num1 - op.num2; break;
        case 'multiply': result = op.num1 * op.num2; break;
        case 'divide': result = op.num1 / op.num2; break;
      }
      return result ? sum + result : 0;
    }, 0) / operations.length;

    expect(component.getAverageResult()).toBeCloseTo(expectedAverage, 2);
  });

  // Example good
  it('should calculate average result correctly', () => {
    // Arrange
    const testCases = [
      { input: { num1: 5, num2: 3, op: 'add' }, expected: 8 },
      { input: { num1: 10, num2: 2, op: 'multiply' }, expected: 20 },
      { input: { num1: 8, num2: 4, op: 'subtract' }, expected: 4 },
      { input: { num1: 15, num2: 3, op: 'divide' }, expected: 5 }
    ];

    // Act
    testCases.forEach(testCase => {
      component.num1.set(testCase.input.num1);
      component.num2.set(testCase.input.num2);
      component.operation.set(testCase.input.op);
      component.calculateToHistory();
    });

    // Assert
    const expectedAverage = 9.25; // (8 + 20 + 4 + 5) / 4
    expect(component.getAverageResult()).toBeCloseTo(expectedAverage, 2);
  });

  it('should return 0 when there are no numeric results', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(0);
    component.operation.set('divide');
    component.calculateToHistory(); // Result in "Cannot divide by 0"

    // Act
    const result = component.getAverageResult();

    // Assert
    expect(result).toBe(0);
  });
});
