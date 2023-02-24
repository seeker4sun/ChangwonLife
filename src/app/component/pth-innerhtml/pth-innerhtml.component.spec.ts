import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthInnerhtmlComponent } from './pth-innerhtml.component';

describe('PthInnerhtmlComponent', () => {
  let component: PthInnerhtmlComponent;
  let fixture: ComponentFixture<PthInnerhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthInnerhtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthInnerhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
