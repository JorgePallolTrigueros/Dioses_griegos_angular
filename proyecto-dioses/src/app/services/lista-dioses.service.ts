import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dios {
  nombre: string;
  descripcion: string;
  categoria: string;
  sexo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListaDiosesService {
  private apiUrl = 'http://localhost:8080/dios'; // Cambia esta URL por la de tu API real

  constructor(private http: HttpClient) {}

  getDioses(): Observable<Dios[]> {
    return this.http.get<Dios[]>(this.apiUrl);
  }
}


