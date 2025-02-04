import { ComplexMathService } from './complex-math.service';

export const createComplexMathServiceMock = (): Partial<ComplexMathService> => ({
    calculatePower: jasmine.createSpy('calculatePower').and.returnValue(8),
    calculateLogarithm: jasmine.createSpy('calculateLogarithm').and.returnValue(3)
});