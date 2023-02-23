import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthBuiltInValidatorComponent } from './pth-built-in-validator.component';

describe('PthBuiltInValidatorComponent', () => {
  let component: PthBuiltInValidatorComponent;
  let fixture: ComponentFixture<PthBuiltInValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthBuiltInValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthBuiltInValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
