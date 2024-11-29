import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeProgresoComponent } from './reporte-de-progreso.component';

describe('ReporteDeProgresoComponent', () => {
  let component: ReporteDeProgresoComponent;
  let fixture: ComponentFixture<ReporteDeProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteDeProgresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteDeProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
