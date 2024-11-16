import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAguaComponent } from './registro-agua.component';

describe('RegistroAguaComponent', () => {
  let component: RegistroAguaComponent;
  let fixture: ComponentFixture<RegistroAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
