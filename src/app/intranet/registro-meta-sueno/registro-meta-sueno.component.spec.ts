import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroMetaSuenoComponent } from './registro-meta-sueno.component';

describe('RegistroMetaSuenoComponent', () => {
  let component: RegistroMetaSuenoComponent;
  let fixture: ComponentFixture<RegistroMetaSuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMetaSuenoComponent ],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Router, useValue: { navigate: () => {} } }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMetaSuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message when form is valid and submitted', () => {
    component.sleepGoalForm.setValue({ sleepHours: 8 });
    component.onSubmit();
    expect(component.message).toBe('Meta de sueño registrada con éxito.');
  });

  it('should show error message when form is invalid and submitted', () => {
    component.sleepGoalForm.setValue({ sleepHours: '' });
    component.onSubmit();
    expect(component.message).toBe('Por favor, ingrese un valor válido de horas de sueño.');
  });

  it('should navigate on successful submit', () => {
    spyOn(component['router'], 'navigate');
    component.sleepGoalForm.setValue({ sleepHours: 8 });
    component.onSubmit();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/principal']);
  });
});
