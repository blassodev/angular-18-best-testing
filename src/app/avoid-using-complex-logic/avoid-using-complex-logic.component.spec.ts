import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidUsingComplexLogicComponent } from './avoid-using-complex-logic.component';

describe('AvoidUsingComplexLogicComponent', () => {
  let component: AvoidUsingComplexLogicComponent;
  let fixture: ComponentFixture<AvoidUsingComplexLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvoidUsingComplexLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoidUsingComplexLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
