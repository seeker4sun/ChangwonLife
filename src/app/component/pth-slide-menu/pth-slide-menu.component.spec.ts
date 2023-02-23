import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthSlideMenuComponent } from './pth-slide-menu.component';

describe('PthSlideMenuComponent', () => {
  let component: PthSlideMenuComponent;
  let fixture: ComponentFixture<PthSlideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthSlideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthSlideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
