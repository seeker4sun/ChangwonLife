import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLimitToComponent } from './pth-limit-to.component';

describe('CustomLimitToComponent', () => {
  let component: CustomLimitToComponent;
  let fixture: ComponentFixture<CustomLimitToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLimitToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLimitToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
