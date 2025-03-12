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

});
