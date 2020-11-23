import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSurveyComponent } from './landing-survey.component';

describe('LandingSurveyComponent', () => {
  let component: LandingSurveyComponent;
  let fixture: ComponentFixture<LandingSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
