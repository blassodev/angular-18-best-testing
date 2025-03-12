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

});
