import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthOrderByComponent } from './pth-order-by.component';

describe('PthOrderByComponent', () => {
  let component: PthOrderByComponent;
  let fixture: ComponentFixture<PthOrderByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthOrderByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthOrderByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
