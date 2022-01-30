import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionAdministracionComponent } from './barra-navegacion-administracion.component';

describe('BarraNavegacionAdministracionComponent', () => {
  let component: BarraNavegacionAdministracionComponent;
  let fixture: ComponentFixture<BarraNavegacionAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionAdministracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
