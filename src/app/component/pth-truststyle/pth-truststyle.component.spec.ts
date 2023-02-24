import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthTruststyleComponent } from './pth-truststyle.component';

describe('PthTruststyleComponent', () => {
  let component: PthTruststyleComponent;
  let fixture: ComponentFixture<PthTruststyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthTruststyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthTruststyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
