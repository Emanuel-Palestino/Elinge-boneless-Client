import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionAdministradorComponent } from './inicio-sesion-administrador.component';

describe('InicioSesionAdministradorComponent', () => {
  let component: InicioSesionAdministradorComponent;
  let fixture: ComponentFixture<InicioSesionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
