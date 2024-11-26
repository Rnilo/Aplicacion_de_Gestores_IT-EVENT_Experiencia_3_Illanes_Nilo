import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/interfaces/IEventos';
import { ApicrudService } from '../services/apicrud.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Evento: IEvento={
      nombre : "",
      fecha : "",
      hora : "",
      descripcion : "",
      cantidadAsistentes : ""      
  }

  constructor(private apicrud: ApicrudService,
    private router: Router,
    private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  crearEvento(){
    this.apicrud.postEvento(this.Evento).subscribe(
      response => {
        console.log('Evento creado:', response);
        this.mensaje();  // Mostrar el mensaje de éxito
        this.router.navigateByUrl("/tabs/tab2");  // Redirigir después de que la solicitud se complete
      },
      error => {
        console.error('Error al crear el evento:', error);
        // Aquí podrías manejar el error, mostrar un mensaje al usuario, etc.
      }
    );
  }
  

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Creando Evento',
      message:'Su evento ha sido creado',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });

    await alert.present();
  }

  volver() {
    // Navegar de vuelta a la página de tab2 si es necesario
    this.router.navigate(['/tabs/tab2']);
  }

}
