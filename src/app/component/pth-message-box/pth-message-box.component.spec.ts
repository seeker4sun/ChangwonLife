import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthMessageBoxComponent } from './pth-message-box.component';

describe('PthMessageBoxComponent', () => {
  let component: PthMessageBoxComponent;
  let fixture: ComponentFixture<PthMessageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthMessageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
