import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { IEventos } from 'src/interfaces/IEventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-eventos',
  templateUrl: './actualizar-eventos.page.html',
  styleUrls: ['./actualizar-eventos.page.scss'],
})
export class ActualizarEventosPage implements OnInit {

  eventos: IEventos[] = [];

  constructor(private apicrud: ApicrudService, private router: Router) { }

  ngOnInit() {
    this.cargarEventos();  // Cargar los eventos al iniciar la página
  }

  cargarEventos() {
    this.apicrud.getEvento().subscribe((data: IEventos[]) => {
      this.eventos = data;
    });
  }

  actualizarEvento(evento: IEventos) {
    // Redirigir a la página de actualización específica para este evento
    this.router.navigate(['/actualizar'], { queryParams: { evento: JSON.stringify(evento) } });
  }

  volver() {
    // Navegar de vuelta a la página de tab2 si es necesario
    this.router.navigate(['/tabs/tab2']);
  }
}
