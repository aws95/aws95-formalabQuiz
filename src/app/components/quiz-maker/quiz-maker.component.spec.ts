import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerComponent } from './quiz-maker.component';

describe('QuizMakerComponent', () => {
  let component: QuizMakerComponent;
  let fixture: ComponentFixture<QuizMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
