import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaPatternComponent } from './aaa-pattern.component';
import {FormsModule} from "@angular/forms";

describe('AaaPatternComponent', () => {
  let component: AaaPatternComponent;
  let fixture: ComponentFixture<AaaPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AaaPatternComponent, FormsModule]
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
