import { TestBed } from '@angular/core/testing';

import {ComplexMathDepenceciesService} from './complex-math-dependecies.service';
import {HttpClient} from "@angular/common/http";
import {MockProvider} from "ng-mocks";
import {of} from "rxjs";
import {HttpTestingController} from "@angular/common/http/testing";

describe('ComplexMathDependeciesService', () => {
  let service: ComplexMathDepenceciesService;
  let httpClientMock: Partial<HttpClient>;
  let httpTestingController: HttpTestingController; //Example bad

  beforeEach(() => {
    httpClientMock = {
      get: jasmine.createSpy('get').and.returnValue(of({ result: 10 }))
    };

    TestBed.configureTestingModule({
      providers: [MockProvider(HttpClient, httpClientMock)]
    });
    service = TestBed.inject(ComplexMathDepenceciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
