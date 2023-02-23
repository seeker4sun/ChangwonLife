import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthFormStatusComponent } from './pth-form-status.component';

describe('PthFormStatusComponent', () => {
  let component: PthFormStatusComponent;
  let fixture: ComponentFixture<PthFormStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthFormStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthFormStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
