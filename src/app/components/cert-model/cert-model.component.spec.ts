import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertModelComponent } from './cert-model.component';

describe('CertModelComponent', () => {
  let component: CertModelComponent;
  let fixture: ComponentFixture<CertModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
