import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSuenoComponent } from './registro-sueno.component';

describe('RegistroSuenoComponent', () => {
  let component: RegistroSuenoComponent;
  let fixture: ComponentFixture<RegistroSuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroSuenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
