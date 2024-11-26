import { Component, OnInit } from '@angular/core';  // Importar OnInit para ejecutar lógica al iniciar la página
import { MenuController } from '@ionic/angular';  // Controlador para manejar el menú lateral
import { ApidatosService } from '../services/apidatos.service';  // Servicio que obtiene datos desde la API
import { Router } from '@angular/router';  // Servicio de Angular para manejar la navegación entre páginas

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posteos: any[] = [];  // Arreglo que almacena los datos obtenidos desde la API (posteos) esto era para el enlace del json placeholder pero al final no se uso
  username: string = '';  // Variable para almacenar el nombre de usuario que se obtiene del localStorage

  // Constructor que inyecta las dependencias necesarias
  constructor(
    private menucontroller: MenuController, 
    private apidatos: ApidatosService, 
    private router: Router
  ) {}

  // Función que se ejecuta cuando se carga la página (ngOnInit)
  ngOnInit() {
    // Obtener el nombre de usuario desde localStorage al cargar la página
    this.username = localStorage.getItem('username') || '';  // Si no hay usuario almacenado, se devuelve una cadena vacía
  }

  // Función para mostrar el menú lateral en la aplicación
  mostrarMenu() {
    this.menucontroller.open('first');  // Abre el menú llamado 'first'
  }

  // Función para cargar los datos desde la API
  CargarApi() {
    // Llama al método 'getPosts' del servicio 'ApidatosService' para obtener los posteos
    this.apidatos.getPosts().subscribe(resp => {
      console.log(resp);  // Muestra la respuesta de la API en la consola para depuración
    });

    // Almacena los datos obtenidos en el arreglo 'posteos'
    this.apidatos.getPosts().subscribe(
      datos => this.posteos = datos,  // Asigna los datos obtenidos al arreglo 'posteos'
    );
  }

  // Función para redirigir a la página de detalles del post
  buscarPost(Observable: any) {
    // Navega a la página 'detalle', pasando los datos del post como parámetro
    this.router.navigate(['/detalle'],
      { queryParams: { post: JSON.stringify(Observable) } });  // Convierte los datos del post a un string JSON para pasarlo en la navegación
  }
}
