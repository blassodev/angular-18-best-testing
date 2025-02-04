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

  it('should calculate power correctly', () => {
      // Arrange
      const base = 2;
      const exponent = 3;
      const expectedResult = 8;


      // Act
      const result = component.calculatePower(base, exponent);

      // Assert
      expect(result).toBe(expectedResult);
      expect(complexMathServiceMock.calculatePower).toHaveBeenCalledWith(base, exponent);
  });

  it('should calculate logarithm correctly', () => {
      // Arrange
      const value = 8;
      const base = 2;
      const expectedResult = 3;

      // Act
      const result = component.calculateLogarithm(value, base);

      // Assert
      expect(result).toBe(expectedResult);
      expect(complexMathServiceMock.calculateLogarithm).toHaveBeenCalledWith(value, base);
  });
});
