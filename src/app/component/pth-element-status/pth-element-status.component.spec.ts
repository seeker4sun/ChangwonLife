import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthElementStatusComponent } from './pth-element-status.component';

describe('PthElementStatusComponent', () => {
  let component: PthElementStatusComponent;
  let fixture: ComponentFixture<PthElementStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthElementStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthElementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
