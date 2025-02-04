import { TestBed } from '@angular/core/testing';

import { ComplexMathService } from './complex-math.service';

describe('ComplexMathService', () => {
  let service: ComplexMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexMathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculatePower', () => {
    // Arrange
    const testCases = [
      { base: 2, exponent: 3, expected: 8 },
      { base: 3, exponent: 2, expected: 9 },
      { base: 5, exponent: 0, expected: 1 },
      { base: 2, exponent: -2, expected: 0.25 },
      { base: 0, exponent: 5, expected: 0 },
      { base: 0, exponent: 0, expected: 1 }
    ];

    testCases.forEach(({ base, exponent, expected }) => {
      it(`should calculate ${base}^${exponent} correctly`, () => {
        // Act
        const result = service.calculatePower(base, exponent);

        // Assert
        expect(result).toBe(expected);
      });
    });
  });

  describe('calculateLogarithm', () => {
    // Arrange
    const testCases = [
      { value: 8, base: 2, expected: 3 },
      { value: 100, base: 10, expected: 2 },
      { value: Math.E, base: Math.E, expected: 1 },
      { value: 1, base: 2, expected: 0 },
      { value: 1, base: 10, expected: 0 },
      { value: 1, base: Math.E, expected: 0 }
    ];

    testCases.forEach(({ value, base, expected }) => {
      it(`should calculate log base ${base} of ${value} correctly`, () => {
        // Act
        const result = service.calculateLogarithm(value, base);

        // Assert
        expect(result).toBeCloseTo(expected, 5);
      });
    });

    // Arrange
    const invalidInputs = [
      { value: 0, base: 2 },
      { value: -1, base: 2 },
      { value: 2, base: 1 },
      { value: 2, base: 0 },
      { value: 2, base: -1 }
    ];

    invalidInputs.forEach(({ value, base }) => {
      it(`should throw error for invalid input: value=${value}, base=${base}`, () => {
        // Act & Assert
        expect(() => service.calculateLogarithm(value, base)).toThrow();
      });
    });
  });
});
