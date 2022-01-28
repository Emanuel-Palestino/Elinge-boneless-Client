import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionClientesComponent } from './barra-navegacion-clientes.component';

describe('BarraNavegacionClientesComponent', () => {
  let component: BarraNavegacionClientesComponent;
  let fixture: ComponentFixture<BarraNavegacionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
