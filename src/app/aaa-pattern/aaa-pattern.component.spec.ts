import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaPatternComponent } from './aaa-pattern.component';

describe('AaaPatternComponent', () => {
  let component: AaaPatternComponent;
  let fixture: ComponentFixture<AaaPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AaaPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
