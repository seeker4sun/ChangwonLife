import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthPromiseMethodComponent } from './pth-promise-method.component';

describe('PthPromiseMethodComponent', () => {
  let component: PthPromiseMethodComponent;
  let fixture: ComponentFixture<PthPromiseMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthPromiseMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthPromiseMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
