import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAlumno } from './card-alumno';

describe('CardAlumno', () => {
  let component: CardAlumno;
  let fixture: ComponentFixture<CardAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlumno],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
