import { Component, OnInit } from '@angular/core';
import { DiosService } from '../services/dios.service';
import { Bibliografia } from '../Modelos/dios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-form-bibliografia',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de importar CommonModule y FormsModule
  templateUrl: './form-bibliografia.component.html',
  styleUrls: ['./form-bibliografia.component.css']
})
export class FormBibliografiaComponent implements OnInit {
  referencia : any;
  bibliografiaId: number | null = null; // ID de la bibliografia
  diosId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private diosService: DiosService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    console.log('Init Bibliografia Form');
    // Si lo abrimos como modal capturamos el dato así
    const datos = this.modalService.obtenerDatos();
    if (datos && datos.bibliografiaId) {
      this.bibliografiaId = datos.bibliografiaId;
      this.loadBibliografia();
    }
    if (datos && datos.diosId) {
      this.diosId = parseInt(datos.diosId as any);
    }
    console.log(datos);

  }

  cerrarModal(): void {
    this.modalService.cerrarModal();
  }

  loadBibliografia(): void {
    this.diosService.getBibliografiaById(parseInt(this.bibliografiaId as any)).subscribe((data) => {
      this.diosId = data.DiosId;
      this.referencia = data.Referencia;
    });
  }

  saveBibliografia(): void {
    if (!this.bibliografiaId) {
      // Crear nueva bibliografía
      this.diosService.addBibliografia({
        Referencia: this.referencia,
        DiosId: this.diosId,
      }).subscribe(() => {
        this.cerrarModal();
      });
    } else {
      // Actualizar bibliografía existente
      this.diosService.updateBibliografia({
        BibliografiaId: this.bibliografiaId,
        Referencia: this.referencia,
        DiosId: this.diosId,
      }).subscribe(() => {
        this.cerrarModal();
      });
    }
  }
}