// batalla.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  BatallaListService {
  private apiUrl = 'http://localhost:8080/v1/batallas'; // Asegúrate de usar la URL correcta de tu API

  constructor(private http: HttpClient) {}

  getBatallas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  deleteBatalla(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}