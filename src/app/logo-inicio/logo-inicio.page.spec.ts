import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoInicioPage } from './logo-inicio.page';

describe('LogoInicioPage', () => {
  let component: LogoInicioPage;
  let fixture: ComponentFixture<LogoInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
