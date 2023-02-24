import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthPromisePrototypeComponent } from './pth-promise-prototype.component';

describe('PthPromisePrototypeComponent', () => {
  let component: PthPromisePrototypeComponent;
  let fixture: ComponentFixture<PthPromisePrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthPromisePrototypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthPromisePrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
