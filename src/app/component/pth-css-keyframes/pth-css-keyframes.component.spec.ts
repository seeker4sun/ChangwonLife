import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthCssKeyframesComponent } from './pth-css-keyframes.component';

describe('PthCssKeyframesComponent', () => {
  let component: PthCssKeyframesComponent;
  let fixture: ComponentFixture<PthCssKeyframesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthCssKeyframesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthCssKeyframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
