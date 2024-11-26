import { Component, OnInit } from '@angular/core';
import { ApiusersService } from '../services/apiusers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { IEventos } from 'src/interfaces/IEventos';

@Component({
  selector: 'app-detalle-qr',
  templateUrl: './detalle-qr.page.html',
  styleUrls: ['./detalle-qr.page.scss'],
})
export class DetalleQrPage implements OnInit {

  eventos: IEventos[] = [];  // Lista de eventos
  qrdata: string = '';       // Almacena el código QR generado
  eventoSeleccionado: IEventos | null = null;  // Inicializa como null

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private apiusers: ApiusersService,
    private alertcontroller: AlertController,
    private apicrud: ApicrudService
  ) {}

  ngOnInit() {
    this.cargarEventos(); // Cargar los eventos al inicializar la página
  }

  generarQr(evento: IEventos) {
    // Genera el QR basado en el evento seleccionado
    if (evento && evento.nombre && evento.descripcion) {
      this.qrdata = `Evento: ${evento.nombre}, Descripción: ${evento.descripcion}, Asistentes: ${evento.cantidadAsistentes}`;
      this.eventoSeleccionado = evento;
      // Redirige a la página de QR con los datos
      this.router.navigate(['/qr-page'], {
        state: { qrdata: this.qrdata, evento: this.eventoSeleccionado }
      });
    } else {
      this.qrdata = 'Datos insuficientes'; // Valor por defecto si faltan datos
    }
  }

  cargarEventos() {
    // Simulación de carga de eventos desde un servicio
    this.apicrud.getEvento().subscribe((data: IEventos[]) => {
      this.eventos = data;
    });
  }

  volver() {
    this.router.navigate(['/tabs/tab4']);
  }
}
