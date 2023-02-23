import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthFormGroupComponent } from './pth-form-group.component';

describe('PthFormGroupComponent', () => {
  let component: PthFormGroupComponent;
  let fixture: ComponentFixture<PthFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
