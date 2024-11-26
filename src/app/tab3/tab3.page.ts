import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { IEventos } from 'src/interfaces/IEventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  eventos: IEventos[]=[];

  constructor(private menucontroller: MenuController, private apicrud: ApicrudService, private router: Router) {}
  
    mostrarMenu() {
      this.menucontroller.open('first');    
    }
  
    ngOnInit() {
      this.apicrud.getEvento().subscribe((data: IEventos[]) => {
        this.eventos = data;
        });
    }
  
    crearEvento(){
      this.router.navigate(['/agregar'])
    }
  
    listarEvento() {
      this.router.navigate(['/detalle-evento']);  // Redirige a la página detalle-evento
    }
    
  
    actualizarEvento(){
      this.router.navigate(['/actualizar'])
    }
  

}
