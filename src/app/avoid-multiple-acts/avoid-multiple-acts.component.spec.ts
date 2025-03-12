import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidMultipleActsComponent } from './avoid-multiple-acts.component';

describe('AvoidMultipleActsComponent', () => {
  let component: AvoidMultipleActsComponent;
  let fixture: ComponentFixture<AvoidMultipleActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvoidMultipleActsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoidMultipleActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
