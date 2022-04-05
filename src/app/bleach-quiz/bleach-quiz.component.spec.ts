import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleachQuizComponent } from './bleach-quiz.component';

describe('BleachQuizComponent', () => {
  let component: BleachQuizComponent;
  let fixture: ComponentFixture<BleachQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BleachQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BleachQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
