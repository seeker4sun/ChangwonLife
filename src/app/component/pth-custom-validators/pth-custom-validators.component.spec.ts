import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthCustomValidatorsComponent } from './pth-custom-validators.component';

describe('PthCustomValidatorsComponent', () => {
  let component: PthCustomValidatorsComponent;
  let fixture: ComponentFixture<PthCustomValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthCustomValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthCustomValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
