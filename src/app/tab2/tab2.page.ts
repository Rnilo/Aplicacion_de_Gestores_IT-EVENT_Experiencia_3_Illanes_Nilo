import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { IEventos } from 'src/interfaces/IEventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  eventos: IEventos[]=[];

  constructor(private menucontroller: MenuController, private apicrud: ApicrudService, private router: Router) {}

  mostrarMenu() {
    this.menucontroller.open('first');    
  }

  ngOnInit() {
    this.apicrud.getEvento().subscribe((data: IEventos[]) => {
      this.eventos = data;
      console.log(this.eventos);  // Verifica que los eventos se están cargando
    });
  }
  

  crearEvento(){
    this.router.navigate(['/agregar'])
  }

  listarEvento() {
    this.router.navigate(['/detalle-evento']);  // Redirige a la página detalle-evento
  }
  

  actualizarEvento(evento: IEventos) {
    // Redirige a la página de actualización pasando el evento como parámetro
    this.router.navigate(['/actualizar'], { queryParams: { evento: JSON.stringify(evento) } });
  }

  redirigirActualizar() {
    this.router.navigate(['/actualizar-eventos']);  // Aquí pones la ruta de la nueva página que muestra la lista
  }

  redirigirEliminar() {
    this.router.navigate(['/eliminar']);  // Redirige a la página de eliminar eventos
  }
  
  
  

}
