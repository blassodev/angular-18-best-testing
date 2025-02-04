import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaPatternComponent } from './aaa-pattern.component';
import {FormsModule} from "@angular/forms";

describe('AaaPatternComponent', () => {
  let component: AaaPatternComponent;
  let fixture: ComponentFixture<AaaPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AaaPatternComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('logic signals', () => {
    it('should add two numbers correctly', () => {
      // Arrange
      component.num1.set(5);
      component.num2.set(3);
      component.operation.set('add');

      // Assert
      expect(component.result()).toBe(8);
    });

    it('should subtract two numbers correctly', () => {
      // Arrange
      component.num1.set(10);
      component.num2.set(4);
      component.operation.set('subtract');

      // Assert
      expect(component.result()).toBe(6);
    });

    it('should multiply two numbers correctly', () => {
      // Arrange
      component.num1.set(7);
      component.num2.set(6);
      component.operation.set('multiply');

      // Assert
      expect(component.result()).toBe(42);
    });

    it('should divide two numbers correctly', () => {
      // Arrange
      component.num1.set(20);
      component.num2.set(5);
      component.operation.set('divide');

      // Assert
      expect(component.result()).toBe(4);
    });

    it('should handle division by zero', () => {
      // Arrange
      component.num1.set(10);
      component.num2.set(0);
      component.operation.set('divide');

      // Assert
      expect(component.result()).toBe('Cannot divide by 0');
    });

    it('should return 0 for unknown operation', () => {
      // Arrange
      component.num1.set(10);
      component.num2.set(5);
      component.operation.set('any');

      // Assert
      expect(component.result()).toBe(0);
    });
  });

  describe('logic function', () => {
      it('should add two numbers correctly', () => {
          // Arrange
          component.num1.set(5);
          component.num2.set(3);
          component.operation.set('add');

          // Act
          component.calculate();

          // Assert
          expect(component.resultCalculate).toBe(8);
      });

      it('should subtract two numbers correctly', () => {
          // Arrange
          component.num1.set(10);
          component.num2.set(4);
          component.operation.set('subtract');

          // Act
          component.calculate();

          // Assert
          expect(component.resultCalculate).toBe(6);
      });

      it('should multiply two numbers correctly', () => {
          // Arrange
          component.num1.set(7);
          component.num2.set(6);
          component.operation.set('multiply');

          // Act
          component.calculate();

          // Assert
          expect(component.resultCalculate).toBe(42);
      });

      it('should divide two numbers correctly', () => {
          // Arrange
          component.num1.set(20);
          component.num2.set(5);
          component.operation.set('divide');

          // Act
          component.calculate();

          // Assert
          expect(component.resultCalculate).toBe(4);
      });

      it('should handle division by zero', () => {
          // Arrange
          component.num1.set(10);
          component.num2.set(0);
          component.operation.set('divide');

          // Act
          component.calculate();

          // Assert
          expect(component.resultCalculate).toBe('Cannot divide by 0');
      });
    });
});
