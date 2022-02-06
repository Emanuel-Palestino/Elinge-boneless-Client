import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesAgregarComponent } from './direcciones-agregar.component';

describe('DireccionesAgregarComponent', () => {
  let component: DireccionesAgregarComponent;
  let fixture: ComponentFixture<DireccionesAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
