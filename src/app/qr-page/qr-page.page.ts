import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-qr-page',  
  templateUrl: './qr-page.page.html',  
  styleUrls: ['./qr-page.page.scss'],  
})
export class QrPagePage implements OnInit {

  qrdata: string = '';  // Variable para almacenar los datos del código QR
  eventoSeleccionado: any;  // Variable para almacenar los detalles del evento seleccionado

  // Constructor donde se inyecta el servicio `Router` para manejar la navegación
  constructor(private router: Router) {
    // Obtiene la navegación actual, que contiene el estado y datos pasados desde otra página
    const navigation = this.router.getCurrentNavigation();
    
    // Si existen datos en el estado de la navegación
    if (navigation?.extras.state) {
      const state: any = navigation.extras.state;  // Almacena el estado de la navegación en una variable
      this.qrdata = state.qrdata;  // Captura los datos del código QR y los almacena en `qrdata`
      this.eventoSeleccionado = state.evento;  // Captura los detalles del evento y los almacena en `eventoSeleccionado`
    }
  }
  
  // Método que se ejecuta al inicializar la página
  ngOnInit() {}

  // Método para volver a la página de detalles del evento
  volver() {
    // Navega de regreso a la página 'tab4' cuando el usuario quiere volver
    this.router.navigate(['/tabs/tab4']);
  }

}
