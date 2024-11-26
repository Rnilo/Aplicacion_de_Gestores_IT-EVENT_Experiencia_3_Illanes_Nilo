import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarEventosPage } from './actualizar-eventos.page';

describe('ActualizarEventosPage', () => {
  let component: ActualizarEventosPage;
  let fixture: ComponentFixture<ActualizarEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
