import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara-qr',
  templateUrl: './camara-qr.page.html',
  styleUrls: ['./camara-qr.page.scss'],
})
export class CamaraQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }
  async leerQr(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    })
  }

}
