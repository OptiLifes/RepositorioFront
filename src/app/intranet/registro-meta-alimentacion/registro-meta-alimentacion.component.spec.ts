import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMetaAlimentacionComponent } from './registro-meta-alimentacion.component';

describe('RegistroMetaAlimentacionComponent', () => {
  let component: RegistroMetaAlimentacionComponent;
  let fixture: ComponentFixture<RegistroMetaAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMetaAlimentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMetaAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
