import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvento, IEventos } from 'src/interfaces/IEventos';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  // Constructor que inyecta el servicio HttpClient para hacer solicitudes HTTP
  constructor(private httpclient: HttpClient) { }

  // Método para obtener la lista de eventos desde la API
  getEvento(): Observable<IEventos[]> {
    // Hace una solicitud GET a la URL de la API (definida en las variables de entorno) para obtener todos los eventos
    return this.httpclient.get<IEventos[]>(`${environment.apiUrl}/eventos`);
  }

  // Método para crear un nuevo evento (POST)
  postEvento(newEvento: IEvento): Observable<IEvento> {
    // Hace una solicitud POST a la API para crear un nuevo evento, enviando 'newEvento' como el cuerpo de la solicitud
    return this.httpclient.post<IEvento>(`${environment.apiUrl}/eventos`, newEvento);
  }

  // Método para actualizar un evento existente (PUT)
  putEvento(evento: any): Observable<IEventos> {
    // Hace una solicitud PUT a la API para actualizar un evento existente, pasando el ID y los datos actualizados
    return this.httpclient.put<IEventos>(`${environment.apiUrl}/eventos/${evento.id}`, evento);
  }

  // Método para eliminar un evento (DELETE)
  deleteEvento(id: string): Observable<any> { 
    // Hace una solicitud DELETE a la API para eliminar un evento por su ID
    return this.httpclient.delete(`${environment.apiUrl}/eventos/${id}`);
  }

  // Método para obtener un evento específico por su ID (GET)
  getEventoById(id: number): Observable<IEventos> {
    // Hace una solicitud GET a la API para obtener un evento por su ID
    return this.httpclient.get<IEventos>(`${environment.apiUrl}/evento/${id}`);
  }
}