import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PthTrustresourceurlComponent } from './pth-trustresourceurl.component';

describe('PthTrustresourceurlComponent', () => {
  let component: PthTrustresourceurlComponent;
  let fixture: ComponentFixture<PthTrustresourceurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PthTrustresourceurlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PthTrustresourceurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
