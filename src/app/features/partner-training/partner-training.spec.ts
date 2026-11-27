import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerTraining } from './partner-training';

describe('PartnerTraining', () => {
  let component: PartnerTraining;
  let fixture: ComponentFixture<PartnerTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
