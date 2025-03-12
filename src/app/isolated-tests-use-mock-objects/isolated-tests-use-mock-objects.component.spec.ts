import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolatedTestsUseMockObjectsComponent } from './isolated-tests-use-mock-objects.component';
import {ComplexMathService} from "../complex-math.service";
import {MockProvider} from "ng-mocks";
import {createComplexMathServiceMock} from "../complex-math.service.mock";

describe('IsolatedTestsUseMockObjectsComponent', () => {
  let component: IsolatedTestsUseMockObjectsComponent;
  let fixture: ComponentFixture<IsolatedTestsUseMockObjectsComponent>;
  let complexMathServiceMock: Partial<ComplexMathService>;

  beforeEach(async () => {
      complexMathServiceMock = createComplexMathServiceMock();

    await TestBed.configureTestingModule({
      imports: [IsolatedTestsUseMockObjectsComponent],
      providers: [MockProvider(ComplexMathService, complexMathServiceMock)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsolatedTestsUseMockObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
