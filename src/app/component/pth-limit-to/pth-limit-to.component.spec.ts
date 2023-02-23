import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthLimitToComponent } from './pth-limit-to.component';

describe('PthLimitToComponent', () => {
  let component: PthLimitToComponent;
  let fixture: ComponentFixture<PthLimitToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthLimitToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthLimitToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
