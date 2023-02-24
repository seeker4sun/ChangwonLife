import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthTrusturlComponent } from './pth-trusturl.component';

describe('PthTrusturlComponent', () => {
  let component: PthTrusturlComponent;
  let fixture: ComponentFixture<PthTrusturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthTrusturlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthTrusturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
