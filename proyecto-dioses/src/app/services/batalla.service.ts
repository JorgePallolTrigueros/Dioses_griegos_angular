// batalla.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatallaService {
  private apiUrl = 'http://localhost:8080/v1/batallas'; // Asegúrate de usar la URL correcta de tu API

  constructor(private http: HttpClient) {}

  getBibliografiaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteBibliografia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateBibliografia(bibliografia: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bibliografia);
  }
}