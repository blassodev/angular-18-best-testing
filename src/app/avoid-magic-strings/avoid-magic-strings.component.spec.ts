import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidMagicStringsComponent } from './avoid-magic-strings.component';
import {ComplexMathService} from "../complex-math.service";
import {createComplexMathServiceMock} from "../complex-math.service.mock";
import {MockProvider} from "ng-mocks";
import {DIVISION_BY_ZERO_MESSAGE, Operation} from "./calculator.constants";

describe('AvoidMagicStringsComponent', () => {
  let component: AvoidMagicStringsComponent;
  let fixture: ComponentFixture<AvoidMagicStringsComponent>;
  let complexMathServiceMock: Partial<ComplexMathService>;

  beforeEach(async () => {
    complexMathServiceMock = createComplexMathServiceMock();

    await TestBed.configureTestingModule({
      imports: [AvoidMagicStringsComponent],
      providers: [MockProvider(ComplexMathService, complexMathServiceMock)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoidMagicStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform addition correctly', () => {
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set(Operation.ADD);

    expect(component.result()).toBe(8);
  });

  it('should perform subtraction correctly', () => {
    component.num1.set(10);
    component.num2.set(4);
    component.operation.set(Operation.SUBTRACT);

    expect(component.result()).toBe(6);
  });

  it('should perform multiplication correctly', () => {
    component.num1.set(6);
    component.num2.set(7);
    component.operation.set(Operation.MULTIPLY);

    expect(component.result()).toBe(42);
  });

  it('should perform division correctly', () => {
    component.num1.set(15);
    component.num2.set(3);
    component.operation.set(Operation.DIVIDE);

    expect(component.result()).toBe(5);
  });

  it('should handle division by zero', () => {
    component.num1.set(10);
    component.num2.set(0);
    component.operation.set(Operation.DIVIDE);

    expect(component.result()).toBe(DIVISION_BY_ZERO_MESSAGE);
  });

  it('should calculate and add to history', () => {
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set(Operation.ADD);

    component.calculateToHistory();

    expect(component.history().length).toBe(1);
    expect(component.history()[0]).toBe('5 add 3 = 8');
  });

  it('should calculate average result correctly', () => {
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set(Operation.ADD);
    component.calculateToHistory();

    component.num1.set(10);
    component.num2.set(2);
    component.operation.set(Operation.MULTIPLY);
    component.calculateToHistory();

    expect(component.getAverageResult()).toBe(14); // (8 + 20) / 2
  });

  it('should calculate power using complex math service', () => {
    const base = 2;
    const exponent = 3;
    const expectedResult = 8;

    const result = component.calculatePower(base, exponent);

    expect(result).toBe(expectedResult);
    expect(complexMathServiceMock.calculatePower).toHaveBeenCalledWith(base, exponent);
  });

  it('should calculate logarithm using complex math service', () => {
    const value = 8;
    const base = 2;
    const expectedResult = 3;

    const result = component.calculateLogarithm(value, base);

    expect(result).toBe(expectedResult);
    expect(complexMathServiceMock.calculateLogarithm).toHaveBeenCalledWith(value, base);
  });
});
