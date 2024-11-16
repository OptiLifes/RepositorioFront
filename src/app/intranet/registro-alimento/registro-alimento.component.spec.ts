import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegistroAlimentoComponent } from './registro-alimento.component';

describe('RegistroAlimentoComponent', () => {
  let component: RegistroAlimentoComponent;
  let fixture: ComponentFixture<RegistroAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RegistroAlimentoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message on valid input', () => {
    component.food = { name: 'Manzana', quantity: 100, category: 'desayuno' };
    component.saveFood();
    expect(component.message).toBe('Alimento registrado con éxito');
  });

  it('should display error message on incomplete input', () => {
    component.food = { name: '', quantity: 0, category: '' };
    component.saveFood();
    expect(component.message).toBe('Por favor, complete todos los campos correctamente');
  });
});
