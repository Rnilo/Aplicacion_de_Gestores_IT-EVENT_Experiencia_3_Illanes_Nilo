import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Servicio de autenticación
import { AlertController } from '@ionic/angular';  // Controlador para alertas

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.page.html',
  styleUrls: ['./comienzo.page.scss'],
})
export class ComienzoPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authservice: AuthService, 
    private router: Router, 
    private alertcontroller: AlertController, 
    private builder: FormBuilder
  ) {
    // Inicialización del formulario de login con validaciones
    this.loginForm = this.builder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(6)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit() { }

  // Función para manejar el login
  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authservice.login(loginData).subscribe(
        (res) => {
          console.log("Login exitoso", res);
          localStorage.setItem('username', loginData.username);
          this.router.navigate(['/tabs/tab1']);
        },
        async (error) => {
          console.log("Error de login", error);

          if (error.message === 'Usuario no encontrado') {
            await this.presentAlert();  // Mostrar alerta si el usuario no existe
          } else {
            console.error('Ocurrió otro error:', error);
          }
        }
      );
    } else {
      console.log("Formulario inválido");
    }
  }

  // Función para mostrar la alerta y limpiar el campo de usuario
  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Error',
      message: 'Por favor, ingresa un usuario existente.',
      buttons: ['OK']
    });

    await alert.present();

    // Limpiar el campo de nombre de usuario y restaurar su estado
    this.loginForm.controls['username'].setValue('');
    this.loginForm.controls['username'].markAsPristine();  // Marcar como no tocado
    this.loginForm.controls['username'].markAsUntouched();  // Marcar como sin cambios
  }

  registrar() {
    // Lógica para el registro (no implementada aún)
  }

}
