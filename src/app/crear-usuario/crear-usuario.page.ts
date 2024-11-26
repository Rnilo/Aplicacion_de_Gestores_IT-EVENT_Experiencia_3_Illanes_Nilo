import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserNuevo } from 'src/interfaces/users';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  registroForm: FormGroup; // Formulario para el registro
  userdata: any;  // Almacena la respuesta de GetUserByUsername

  // Objeto que contiene los datos del nuevo usuario
  nuevoUsuario: UserNuevo = {
    username: "",
    email: "",
    rut: "",
    password: "",
    isactive: false
  };

  constructor(
    private authservice: AuthService,
    private fBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    // Inicialización del formulario con validaciones
    this.registroForm = this.fBuilder.group({
      username: new FormControl("", [Validators.required, Validators.minLength(6)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      rut: new FormControl("", [Validators.required, Validators.minLength(9)]),  // Validación de largo del RUT
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])  // Contraseña con al menos 8 caracteres, un número y una letra
    });
  }

  ngOnInit() { }

  // Función para crear el usuario
  crearUsuario() {
    if (this.registroForm.valid) {
      const rut = this.registroForm.value.rut;
  
      // Validación de RUT sin puntos ni guion (módulo 11)
      if (!this.validarRut(rut)) {
        this.mostrarErrorRut();
        return;  // Sale si el RUT no es válido
      }

      // Verifica si el usuario ya existe
      this.authservice.GetUserByUsername(this.registroForm.value.username).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata && this.userdata.length > 0) {
          this.registroForm.reset();
          this.errorDuplicidad();
        } else {
          // Si no existe, se crea el nuevo usuario
          
          // Asignar los valores ingresados en el formulario al objeto 'nuevoUsuario'
          this.nuevoUsuario.username = this.registroForm.value.username;  // Asignar el nombre de usuario
          this.nuevoUsuario.password = this.registroForm.value.password;  // Asignar la contraseña
          this.nuevoUsuario.email = this.registroForm.value.email;        // Asignar el email
          this.nuevoUsuario.rut = this.formatearRut(this.registroForm.value.rut); // Formatear el RUT con puntos y guion para almacenarlo
          this.nuevoUsuario.isactive = true;                             // Establecer el estado activo del usuario
  
          // Llama al método PostUsuario del AuthService para registrar el nuevo usuario
          this.authservice.PostUsuario(this.nuevoUsuario).subscribe(() => {
            this.registroForm.reset();
            this.mostrarMensaje();
  
            // Redirige a la página de inicio de sesión si no está ya en 'comienzo'
            if (this.router.url !== '/comienzo') {
              this.router.navigateByUrl('/comienzo');
            }
          });
        }
      });
    }
  }

  // Función para mostrar un mensaje de error si el RUT es inválido
  async mostrarErrorRut() {
    const alerta = await this.alertController.create({
      header: 'Error',
      message: 'El RUT ingresado no es válido. Por favor, revisa los datos.',
      buttons: ['OK']
    });
    await alerta.present();
  }

  // Función para mostrar un mensaje de éxito tras la creación del usuario
  async mostrarMensaje() {
    const alerta = await this.alertController.create({
      header: 'Usuario Creado',
      message: 'Bienvenid@! ' + this.nuevoUsuario.username,
      buttons: ['OK']
    });
    await alerta.present();
  }

  // Función para mostrar un mensaje de error si el usuario ya existe
  async errorDuplicidad() {
    const alerta = await this.alertController.create({
      header: 'Error',
      message: 'El usuario ' + this.nuevoUsuario.username + ' ya está registrado.',
      buttons: ['OK']
    });
    await alerta.present();
  }

  // Función para validar el RUT usando el módulo 11 (sin puntos ni guion)
  validarRut(rut: string): boolean {
    if (!rut || rut.length < 9) {
      return false;
    }
  
    // Elimina puntos y guiones
    const rutLimpio = rut.replace(/\./g, '').replace(/-/g, '');
  
    // Divide el número en su parte numérica y el dígito verificador
    const rutSinDv = rutLimpio.slice(0, -1);
    const dvIngresado = rutLimpio.slice(-1).toUpperCase();
  
    // Validación del dígito verificador usando el algoritmo de módulo 11
    let suma = 0;
    let multiplicador = 2;
  
    for (let i = rutSinDv.length - 1; i >= 0; i--) {
      suma += parseInt(rutSinDv[i]) * multiplicador;
      multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }
  
    const dvEsperado = 11 - (suma % 11);
    const dvFinal = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
  
    return dvFinal === dvIngresado;
  }

  // Función para formatear el RUT con puntos y guion para almacenarlo
  formatearRut(rut: string): string {
    // Elimina puntos y guiones
    let rutLimpio = rut.replace(/\./g, '').replace(/-/g, '');

    // Extrae el dígito verificador
    let dv = rutLimpio.slice(-1);
    let cuerpo = rutLimpio.slice(0, -1);

    // Aplica formato con puntos cada 3 dígitos
    cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${cuerpo}-${dv}`; // Retorna el RUT formateado con puntos y guion
  }
}
