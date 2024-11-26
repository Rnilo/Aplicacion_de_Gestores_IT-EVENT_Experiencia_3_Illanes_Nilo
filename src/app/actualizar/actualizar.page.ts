import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Módulo para acceder a los parámetros de la ruta activa
import { IEventos } from 'src/interfaces/IEventos';  // Interfaz que define la estructura de los eventos
import { ApicrudService } from '../services/apicrud.service';  // Servicio que maneja operaciones CRUD con la API
import { Router } from '@angular/router';  // Servicio para navegar entre rutas en la aplicación

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  // Inicialización del objeto 'evento' con valores vacíos según la estructura de IEventos
  evento: IEventos = {
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    descripcion: '',
    cantidadAsistentes: ''
  };

  // Inyectamos ActivatedRoute, ApicrudService y Router en el constructor
  constructor(
    private activatedRoute: ActivatedRoute,  // Para acceder a los parámetros de la ruta
    private apicrud: ApicrudService,  // Servicio para interactuar con la API y actualizar eventos
    private router: Router  // Servicio para redirigir a otras rutas
  ) {}

  // Este método se ejecuta cuando la página se inicializa
  ngOnInit() {
    // Suscripción a los parámetros de la ruta activa
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['evento']) {
        // Si existe un evento en los parámetros, se convierte de JSON a objeto y se asigna
        this.evento = JSON.parse(params['evento']);  // Asignar el evento recibido desde los parámetros de la ruta
      }
    });
  }

  // Método para actualizar el evento
  actualizarEvento() {
    // Llama al servicio ApicrudService para actualizar el evento con los nuevos datos
    this.apicrud.putEvento(this.evento).subscribe(response => {
      console.log('Evento actualizado:', response);  // Muestra en consola la respuesta al actualizar el evento
      this.router.navigate(['/tabs/tab2']);  // Redirige a 'tab2' después de la actualización
    }, error => {
      console.error('Error al actualizar el evento:', error);  // Muestra en consola el error si la actualización falla
    });
  }
}
