import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoloTraining } from './solo-training';

describe('SoloTraining', () => {
  let component: SoloTraining;
  let fixture: ComponentFixture<SoloTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(SoloTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
