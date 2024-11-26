import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleQrPage } from './detalle-qr.page';

describe('DetalleQrPage', () => {
  let component: DetalleQrPage;
  let fixture: ComponentFixture<DetalleQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
