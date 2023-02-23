import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthFormReferenceVariableComponent } from './pth-form-reference-variable.component';

describe('PthFormReferenceVariableComponent', () => {
  let component: PthFormReferenceVariableComponent;
  let fixture: ComponentFixture<PthFormReferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthFormReferenceVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthFormReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
