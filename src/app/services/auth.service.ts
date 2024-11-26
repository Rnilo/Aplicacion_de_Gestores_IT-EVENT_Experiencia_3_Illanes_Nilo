import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  // Importar HttpErrorResponse
import { Observable, throwError } from 'rxjs';  // Importar throwError
import { catchError, map } from 'rxjs/operators';  // Importar operadores map y catchError
import { Users, UserNuevo } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';  // Cambia esto por tu URL

  constructor(private httpclient: HttpClient) { }


  // recordar alt+96 = `

  // Método de login modificado para manejar usuarios no encontrados
  login(data: any): Observable<any> {
    return this.httpclient.get<Users[]>(`${this.apiUrl}/usuarios/?username=${data.username}&password=${data.password}`)
      .pipe(
        map(users => {
          // Verifica si la respuesta está vacía
          if (users.length === 0) {
            throw new Error('Usuario no encontrado');  // Lanzar error si no se encuentra el usuario
          }
          return users[0];  // Retorna el primer usuario si es encontrado
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error en la autenticación', error);
          return throwError(error);  // Reenvía el error al componente para manejarlo
        })
      );
  }

  GetAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  PostUsuario(newUsuario:UserNuevo): Observable<UserNuevo>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetUserByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  
}
