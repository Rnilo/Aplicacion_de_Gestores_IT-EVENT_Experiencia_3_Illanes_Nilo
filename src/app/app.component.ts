import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Menu[] = [
    {
      icon: 'sparkles-outline',
      name: 'Inicio',
      redirecTo: '/tabs/tab1',
    },
    {
      icon: 'sunny-outline',
      name: 'Registro',
      redirecTo: '/tabs/tab2',
    },
    {
      icon: 'paw-outline',
      name: 'Eventos',
      redirecTo: '/tabs/tab3',
    },
    {
      icon: 'person-circle-outline',
      name: 'QR',
      redirecTo: '/tabs/tab4',
    },
    {
      icon: 'rocket-outline',
      name: 'Mi Perfil',
      redirecTo: '/tabs/tab5',
    },
    
  ];

  constructor(private router: Router) {}

  // Función que determina si el menú debe ser mostrado
  shouldShowMenu(): boolean {
    const currentUrl = this.router.url;
    // Verifica si la URL está dentro de las pestañas especificadas
    return (
      ['/tabs/tab1', '/tabs/tab2', '/tabs/tab3', '/tabs/tab4', '/tabs/tab5'].includes(currentUrl)
    );
  }
}
