import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidMultipleActsComponent } from './avoid-multiple-acts.component';

describe('AvoidMultipleActsComponent', () => {
  let component: AvoidMultipleActsComponent;
  let fixture: ComponentFixture<AvoidMultipleActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvoidMultipleActsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoidMultipleActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Example bad: multi Acts
  it('should perform multiple calculations and update history', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');

    // Act (multi)
    component.calculateToHistory();
    component.num1.set(10);
    component.num2.set(2);
    component.operation.set('multiply');
    component.calculateToHistory();

    // Assert
    expect(component.history().length).toBe(2);
    expect(component.history()[0]).toBe('5 add 3 = 8');
    expect(component.history()[1]).toBe('10 multiply 2 = 20');
  });

  // Example good: Single Act
  it('should perform a calculation and add it to history', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');

    // Act
    const result = component.calculateToHistory();

    // Assert
    expect(result).toBe(8);
    expect(component.history().length).toBe(1);
    expect(component.history()[0]).toBe('5 add 3 = 8');
  });


  // Example bad
  it('should maintain correct history after multiple calculations', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');
    component.calculateToHistory();

    // Act
    component.num1.set(10);
    component.num2.set(2);
    component.operation.set('multiply');
    component.calculateToHistory();

    // Assert
    expect(component.history().length).toBe(2);
    expect(component.history()[0]).toBe('5 add 3 = 8');
    expect(component.history()[1]).toBe('10 multiply 2 = 20');
  });

  // Example good (1)
  it('should add a new calculation to existing history', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');
    component.calculateToHistory();

    component.num1.set(10);
    component.num2.set(2);
    component.operation.set('multiply');

    // Act
    component.calculateToHistory();

    // Assert
    expect(component.history().length).toBe(2);
    expect(component.history()[0]).toBe('5 add 3 = 8');
    expect(component.history()[1]).toBe('10 multiply 2 = 20');
  });

  // Example good (2)
  it('should add first calculation to history', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');

    // Act
    component.calculateToHistory();

    // Assert
    expect(component.history().length).toBe(1);
    expect(component.history()[0]).toBe('5 add 3 = 8');
  });

  it('should add subsequent calculation to existing history', () => {
    // Arrange
    component.num1.set(5);
    component.num2.set(3);
    component.operation.set('add');
    component.calculateToHistory();

    component.num1.set(10);
    component.num2.set(2);
    component.operation.set('multiply');

    // Act
    component.calculateToHistory();

    // Assert
    expect(component.history().length).toBe(2);
    expect(component.history()[1]).toBe('10 multiply 2 = 20');
  });
});
