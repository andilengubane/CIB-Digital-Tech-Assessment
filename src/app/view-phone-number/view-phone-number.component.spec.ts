import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhoneNumberComponent } from './view-phone-number.component';

describe('ViewPhoneNumberComponent', () => {
  let component: ViewPhoneNumberComponent;
  let fixture: ComponentFixture<ViewPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
