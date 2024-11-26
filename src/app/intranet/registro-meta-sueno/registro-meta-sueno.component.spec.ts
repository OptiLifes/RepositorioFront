import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMetaSuenoComponent } from './registro-meta-sueno.component';

describe('RegistroMetaSuenoComponent', () => {
  let component: RegistroMetaSuenoComponent;
  let fixture: ComponentFixture<RegistroMetaSuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMetaSuenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMetaSuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
