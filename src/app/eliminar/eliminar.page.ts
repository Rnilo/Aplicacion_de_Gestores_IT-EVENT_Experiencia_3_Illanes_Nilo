import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { IEventos } from 'src/interfaces/IEventos';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  eventos: IEventos[] = [];

  constructor(private router: Router,
              private apiCrud: ApicrudService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.cargarEventos();  // Cargar la lista de eventos al iniciar la página
  }

  cargarEventos() {
    this.apiCrud.getEvento().subscribe(
      (resp: IEventos[]) => {
        this.eventos = resp;
      },
      error => {
        console.error('Error al cargar los eventos:', error);
      }
    );
  }

  // Confirmar antes de eliminar el evento
  async confirmarEliminacion(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteEvento(id);  // Llamar al método para eliminar el evento
          }
        }
      ]
    });

    await alert.present();
  }

  // Eliminar el evento
  deleteEvento(id: string) {  // Cambiar 'number' por 'string'
    this.apiCrud.deleteEvento(id).subscribe(
      () => {
        this.cargarEventos();  // Recargar la lista de eventos después de eliminar
      },
      error => {
        console.error('Error al eliminar el evento:', error);
      }
    );
  }

  // Mostrar un mensaje de éxito después de eliminar
  async showSuccessMessage() {
    const alert = await this.alertController.create({
      header: 'Evento Eliminado',
      message: 'El evento ha sido eliminado con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

  regresar(){
    this.router.navigate(['/tabs/tab1']);
  }
}
