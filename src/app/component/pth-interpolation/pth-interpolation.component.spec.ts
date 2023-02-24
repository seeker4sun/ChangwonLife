import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthInterpolationComponent } from './pth-interpolation.component';

describe('PthInterpolationComponent', () => {
  let component: PthInterpolationComponent;
  let fixture: ComponentFixture<PthInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
