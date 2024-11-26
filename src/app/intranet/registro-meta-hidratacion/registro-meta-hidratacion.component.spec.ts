import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroMetaHidratacionComponent } from './registro-meta-hidratacion.component';

describe('RegistroMetaHidratacionComponent', () => {
  let component: RegistroMetaHidratacionComponent;
  let fixture: ComponentFixture<RegistroMetaHidratacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [RegistroMetaHidratacionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMetaHidratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message on valid input', () => {
    component.hydrationForm.setValue({
      description: 'Drink 2 liters of water',
      dailyWaterIntake: 2,
      interval: 'media hora',
    });
    component.onSubmit();
    expect(component.message).toBe('Meta de hidratación registrada con éxito.');
  });

  it('should display error message on incomplete input', () => {
    component.hydrationForm.setValue({
      description: '',
      dailyWaterIntake: null,
      interval: '',
    });
    component.onSubmit();
    expect(component.message).toBe('Por favor, complete todos los campos correctamente.');
  });
});
