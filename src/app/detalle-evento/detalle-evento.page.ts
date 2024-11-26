import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';  // Servicio que maneja las operaciones CRUD con la API
import { IEventos } from 'src/interfaces/IEventos';  // Interfaz que define la estructura de los eventos
import { Router } from '@angular/router';  // Servicio para la navegación entre páginas

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {

  // Variable que almacenará los eventos obtenidos de la API
  eventos: IEventos[] = [];

  // Constructor que inyecta el servicio Apicrud y el Router para la navegación
  constructor(private apicrud: ApicrudService, private router: Router) { }

  // Este método se ejecuta cuando la página se inicializa
  ngOnInit() {
    this.cargarEventos();  // Llama a la función para cargar los eventos al iniciar la página
  }

  // Función para obtener la lista de eventos desde la API
  cargarEventos() {
    this.apicrud.getEvento().subscribe((data: IEventos[]) => {
      // Almacena los eventos obtenidos en la variable 'eventos'
      this.eventos = data;
    }, error => {
      // Muestra un error en la consola si la carga de eventos falla
      console.error('Error al cargar los eventos:', error);
    });
  }

  // Función para navegar de vuelta a la página 'tab2'
  volver() {
    this.router.navigate(['/tabs/tab2']);  // Redirige a la página de 'tab2'
  }
}
