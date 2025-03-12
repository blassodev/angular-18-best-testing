import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHelperMethodsToSetupComponent } from './use-helper-methods-to-setup.component';

interface Calculation {
  num1: number;
  num2: number;
  operation: string;
}

describe('UseHelperMethodsToSetupComponent', () => {
  let component: UseHelperMethodsToSetupComponent;
  let fixture: ComponentFixture<UseHelperMethodsToSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseHelperMethodsToSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseHelperMethodsToSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
