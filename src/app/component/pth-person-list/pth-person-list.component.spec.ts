import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthPersonListComponent } from './pth-person-list.component';

describe('PthPersonListComponent', () => {
  let component: PthPersonListComponent;
  let fixture: ComponentFixture<PthPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthPersonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
