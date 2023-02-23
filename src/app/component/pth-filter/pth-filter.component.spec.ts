import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthFilterComponent } from './pth-filter.component';

describe('PthFilterComponent', () => {
  let component: PthFilterComponent;
  let fixture: ComponentFixture<PthFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
