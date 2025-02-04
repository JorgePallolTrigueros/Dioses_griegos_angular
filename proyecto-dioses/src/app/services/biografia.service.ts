import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BiografiaService {
  private apiUrl = 'http://localhost:8080/v1/bibliografias'; // URL base de la API

  constructor(private http: HttpClient) {}

  getBibliografiaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteBibliografia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}