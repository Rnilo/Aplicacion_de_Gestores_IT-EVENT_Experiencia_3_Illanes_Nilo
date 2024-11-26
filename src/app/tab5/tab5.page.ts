import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private menucontroller: MenuController) { }

  ngOnInit() {
  }
  cerrarSesion() {
  }
  mostrarMenu() {
    this.menucontroller.open('first'); 
  }

}
