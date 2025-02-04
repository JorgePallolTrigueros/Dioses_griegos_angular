import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalCallback: ((componente: string, titulo: string, datos?: any) => void) | null = null;
  private closeModalCallback: (() => void) | null = null;
  private modalData: any = null;

  setModalCallback(callback: (componente: string, titulo: string, datos?: any) => void) {
    this.modalCallback = callback;
  }

  setCloseModalCallback(callback: () => void) {
    this.closeModalCallback = callback;
  }

  abrirModal(componente: string, titulo: string, datos?: any) {
    this.modalData = datos; // Guardamos los datos en el servicio
    if (this.modalCallback) {
      this.modalCallback(componente, titulo, datos);
    }
  }

  cerrarModal() {
    if (this.closeModalCallback) {
      this.closeModalCallback();
    }
  }

  obtenerDatos(): any {
    return this.modalData;
  }
}
