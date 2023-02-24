import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthTrusthtmlComponent } from './pth-trusthtml.component';

describe('PthTrusthtmlComponent', () => {
  let component: PthTrusthtmlComponent;
  let fixture: ComponentFixture<PthTrusthtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthTrusthtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthTrusthtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
