import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualenteService {
  private apiUrl = 'http://localhost:8080/v1/actualentes'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener todos los actualentes
  getActualentes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener un actualente por ID
  getActualenteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo actualente
  createActualente(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }

  // Actualizar un actualente existente
  updateActualente(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar un actualente
  deleteActualente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
