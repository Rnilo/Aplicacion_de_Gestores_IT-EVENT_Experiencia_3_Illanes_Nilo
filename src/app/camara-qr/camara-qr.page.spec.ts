import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraQrPage } from './camara-qr.page';

describe('CamaraQrPage', () => {
  let component: CamaraQrPage;
  let fixture: ComponentFixture<CamaraQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
