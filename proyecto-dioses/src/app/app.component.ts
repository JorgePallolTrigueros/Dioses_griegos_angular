

import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule para habilitar *ngIf
import * as bootstrap from 'bootstrap'; // Importar Bootstrap
import { ModalService } from './services/modal.service';
import { BatallaListComponent } from './batalla-list/batalla-list.component'
import { FormDiosComponent } from './form-dios/form-dios.component';
import { FormMitosComponent } from './form-mitos/form-mitos.component';
import { FormActualmenteComponent } from './form-actualmente/form-actualmente.component';
import { FormBibliografiaComponent } from './form-bibliografia/form-bibliografia.component';
import { FormModoTransporteComponent} from './form-modotransporte/form-modotransporte.component';
import { FormBatallaComponent } from './form-batalla/form-batalla.component';
import { AsociarBatallaComponent } from './asociar-batalla/asociar-batalla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    BatallaListComponent,
    FormDiosComponent,
    FormMitosComponent,
    FormActualmenteComponent,
    FormBibliografiaComponent,
    FormModoTransporteComponent,
    FormBatallaComponent,
    AsociarBatallaComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado a styleUrls
})
export class AppComponent {

  @ViewChild('modalContainer') modalContainer!: ElementRef;
  modalInstance: any;

  modalTitulo = "Modal";
  modalComponente: string = "";
  modalData: any = null;

  title = 'proyecto-dioses';
  activeMenu: string = '';

  constructor(private modalService: ModalService) {
    // Escucha las llamadas desde otros componentes
    this.modalService.setModalCallback((componente, titulo, datos) => {
      this.abrirModal(componente, titulo, datos);
    });

    // Se conecta con el servicio para cerrar el modal
    this.modalService.setCloseModalCallback(() => {
      this.cerrarModal();
    });

  }

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? '' : menu;
  }

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.modalContainer.nativeElement);
  }

  abrirModal(componente: string, titulo: string, datos?: any) {
    this.modalTitulo = titulo;
    this.modalComponente = componente;
    this.modalData = datos;
    this.modalInstance.show();
  }

  cerrarModal() {
    this.modalInstance.hide();
    this.modalComponente = ""; // Limpiar el contenido del modal
    this.modalData = null;
  }

}

