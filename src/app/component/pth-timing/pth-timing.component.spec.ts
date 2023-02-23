import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthTimingComponent } from './pth-timing.component';

describe('PthTimingComponent', () => {
  let component: PthTimingComponent;
  let fixture: ComponentFixture<PthTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
