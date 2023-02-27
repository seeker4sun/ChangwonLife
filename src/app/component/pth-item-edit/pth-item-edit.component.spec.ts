import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthItemEditComponent } from './pth-item-edit.component';

describe('PthItemEditComponent', () => {
  let component: PthItemEditComponent;
  let fixture: ComponentFixture<PthItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
