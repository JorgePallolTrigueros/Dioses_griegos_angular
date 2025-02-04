import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dios, Mito, ModoTransporte, Actualente, Batalla, Bibliografia } from '../Modelos/dios.model';

@Injectable({
  providedIn: 'root',
})
export class DiosService {
  private baseUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {}

  // DIOS
  getDioses(): Observable<Dios[]> {
    return this.http.get<Dios[]>(`${this.baseUrl}/dios`);
  }



  addDios(dios: Dios): Observable<Dios> {
    return this.http.post<Dios>(`${this.baseUrl}/dios`, dios);
  }



  deleteDios(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/dios/${id}`);
  }

  // MITO
  getMitos(): Observable<Mito[]> {
    return this.http.get<Mito[]>(`${this.baseUrl}/mito`);
  }

  getMitoById(id: number): Observable<Mito> {
    return this.http.get<Mito>(`${this.baseUrl}/mito/${id}`);
  }

  addMito(mito: any): Observable<Mito> {
    return this.http.post<Mito>(`${this.baseUrl}/mito`, mito);
  }

  updateMito(mito: any): Observable<Mito> {
    return this.http.put<Mito>(`${this.baseUrl}/mito/${mito.id}`, mito);
  }

  deleteMito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/mito/${id}`);
  }

  // MODO TRANSPORTE
  getModosTransporte(): Observable<ModoTransporte[]> {
    return this.http.get<ModoTransporte[]>(`${this.baseUrl}/modo_transporte`);
  }

  getModoTransporteById(id: number): Observable<ModoTransporte> {
    return this.http.get<ModoTransporte>(`${this.baseUrl}/modo_transporte/${id}`);
  }

  addModoTransporte(modo: ModoTransporte): Observable<ModoTransporte> {
    return this.http.post<ModoTransporte>(`${this.baseUrl}/modo_transporte`, modo);
  }



  deleteModoTransporte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/modo_transporte/${id}`);
  }

  // BATALLAS
  getBatallas(): Observable<Batalla[]> {
    return this.http.get<Batalla[]>(`${this.baseUrl}/batallas`);
  }

  getBatallaById(id: number): Observable<Batalla> {
    return this.http.get<Batalla>(`${this.baseUrl}/batallas/${id}`);
  }

  addBatalla(batalla: Batalla): Observable<Batalla> {
    return this.http.post<Batalla>(`${this.baseUrl}/batallas`, batalla);
  }



  getDiosById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dios/${id}`);
  }

  createDios(dios: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/dios`, dios); // Solo un argumento
  }

  updateDios(id: number, dios: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/dios/${id}`, dios); // Correcto: dos argumentos
  }


  deleteBatalla(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/batallas/${id}`);
  }

  // BIBLIOGRAFÍAS
  getBibliografias(): Observable<Bibliografia[]> {
    return this.http.get<Bibliografia[]>(`${this.baseUrl}/bibliografias`);
  }

  getBibliografiaById(id: number): Observable<Bibliografia> {
    return this.http.get<Bibliografia>(`${this.baseUrl}/bibliografias/${id}`);
  }

  addBibliografia(bibliografia: Bibliografia): Observable<Bibliografia> {
    return this.http.post<Bibliografia>(`${this.baseUrl}/bibliografias`, bibliografia);
  }

  updateBibliografia(bibliografia: Bibliografia): Observable<Bibliografia> {
    return this.http.put<Bibliografia>(`${this.baseUrl}/bibliografias/${bibliografia.BibliografiaId}`, bibliografia);
  }

  deleteBibliografia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/bibliografias/${id}`);
  }

  updateModoTransporte(modo: ModoTransporte): Observable<ModoTransporte> {
    return this.http.put<ModoTransporte>(`${this.baseUrl}/modo_transporte/${modo.Modo_TransporteId}`, modo);
  }
  
  updateBatalla(batalla: Batalla): Observable<Batalla> {
    return this.http.put<Batalla>(`${this.baseUrl}/batallas/${batalla.BatallaId}`, batalla);
  }
  


  // Métodos para obtener datos por DiosId
  getMitosByDiosId(diosId: number): Observable<Mito[]> {
    return this.http.get<Mito[]>(`${this.baseUrl}/mitos/dios/${diosId}`);
  }

  getModoTransporteByDiosId(diosId: number): Observable<ModoTransporte[]> {
    return this.http.get<ModoTransporte[]>(`${this.baseUrl}/modo_transporte/dios/${diosId}`);
  }

  getActualentesByDiosId(diosId: number): Observable<Actualente[]> {
    return this.http.get<Actualente[]>(`${this.baseUrl}/actualentes/dios/${diosId}`);
  }

  getBibliografiasByDiosId(diosId: number): Observable<Bibliografia[]> {
    return this.http.get<Bibliografia[]>(`${this.baseUrl}/bibliografias/dios/${diosId}`);
  }

  getBatallasByDiosId(diosId: number): Observable<Batalla[]> {
    return this.http.get<Batalla[]>(`${this.baseUrl}/batallas/${diosId}`);
  }




  // Obtener un Actualente por su ID
  getActualenteById(id: number): Observable<Actualente> {
    return this.http.get<Actualente>(`${this.baseUrl}/actualentes/${id}`);
  }

  // Crear un nuevo Actualente
  addActualente(actualente: Actualente): Observable<Actualente> {
    return this.http.post<Actualente>(`${this.baseUrl}/actualentes`, actualente);
  }

  // Actualizar un Actualente existente
  updateActualente(actualente: Actualente): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl}/actualentes/${actualente.ActualenteId}`,
      actualente
    );
  }
}
