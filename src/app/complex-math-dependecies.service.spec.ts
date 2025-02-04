import { TestBed } from '@angular/core/testing';

import {ComplexMathDepenceciesService} from './complex-math-dependecies.service';
import {HttpClient} from "@angular/common/http";
import {MockProvider} from "ng-mocks";
import {of} from "rxjs";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('ComplexMathDependeciesService', () => {
  let service: ComplexMathDepenceciesService;
  let httpClientMock: Partial<HttpClient>;
  let httpTestingController: HttpTestingController; //Example bad

  beforeEach(() => {
    httpClientMock = {
      get: jasmine.createSpy('get').and.returnValue(of({ result: 10 }))
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //Example bad
      providers: [MockProvider(HttpClient, httpClientMock)]
    });
    service = TestBed.inject(ComplexMathDepenceciesService);
    httpTestingController = TestBed.inject(HttpTestingController); //Example bad
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Example bad
  xit('should perform complex calculation bad', (done) => {
    service.complexCalculation('multiply', 2, 5).subscribe(result => {
      expect(result).toBe(10);
      done();
    });

    const req = httpTestingController.expectOne('https://api.com/calculate?operation=multiply&a=2&b=5');
    expect(req.request.method).toBe('GET');
    req.flush({ result: 10 });

    httpTestingController.verify();
  });

  //Example good
  it('should perform complex calculation good', (done: DoneFn) => {
    service.complexCalculation('multiply', 2, 5).subscribe({
      next: result => {
        expect(result).toBe(10);
        expect(httpClientMock.get).toHaveBeenCalledTimes(1);
        expect(httpClientMock.get).toHaveBeenCalledWith('https://api.com/calculate?operation=multiply&a=2&b=5');
        done();
      },
      error: done.fail
    });
  });
});
