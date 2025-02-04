import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHelperMethodsToSetupComponent } from './use-helper-methods-to-setup.component';

interface Calculation {
  num1: number;
  num2: number;
  operation: string;
}

describe('UseHelperMethodsToSetupComponent', () => {
  let component: UseHelperMethodsToSetupComponent;
  let fixture: ComponentFixture<UseHelperMethodsToSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseHelperMethodsToSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseHelperMethodsToSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Helper methods
  function setupCalculation(data: Calculation) {
    component.num1.set(data.num1);
    component.num2.set(data.num2);
    component.operation.set(data.operation);
    return component.calculateToHistory();
  }

  function performMultipleCalculations(data: Calculation[]) {
    data.forEach(result => setupCalculation(result));
  }

  it('should add two numbers correctly', () => {
    const result = setupCalculation({ num1: 5, num2: 3, operation: 'add' });
    expect(result).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    const result = setupCalculation({ num1: 10, num2: 4, operation: 'subtract' });
    expect(result).toBe(6);
  });

  it('should multiply two numbers correctly', () => {
    const result = setupCalculation({ num1: 7, num2: 6, operation: 'multiply' });
    expect(result).toBe(42);
  });

  it('should divide two numbers correctly', () => {
    const result = setupCalculation({ num1: 20, num2: 5, operation: 'divide' });
    expect(result).toBe(4);
  });

  it('should handle division by zero', () => {
    const result = setupCalculation({ num1: 10, num2: 0, operation: 'divide' });
    expect(result).toBe('Cannot divide by 0');
  });

  it('should calculate average result correctly', () => {
    const calculations: Calculation[] = [
      { num1: 5, num2: 3, operation: 'add' },
      { num1: 10, num2: 2, operation: 'multiply' },
      { num1: 8, num2: 4, operation: 'subtract' },
      { num1: 15, num2: 3, operation: 'divide' }
    ];
    performMultipleCalculations(calculations);

    const averageResult = component.getAverageResult();
    expect(averageResult).toBeCloseTo(9.25, 2);
  });

  it('should return 0 when there are no numeric results', () => {
    setupCalculation({ num1: 5, num2: 0, operation: 'divide' });
    const averageResult = component.getAverageResult();
    expect(averageResult).toBe(0);
  });
});
