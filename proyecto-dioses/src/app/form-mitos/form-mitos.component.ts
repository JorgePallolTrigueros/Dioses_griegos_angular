import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiosService } from '../services/dios.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-form-mitos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // IMPORTA ESTOS MÓDULOS AQUÍ
  templateUrl: './form-mitos.component.html',
  styleUrls: ['./form-mitos.component.css']
})
export class FormMitosComponent implements OnInit {
  mitoForm!: FormGroup; // Asegúrate de que esté inicializado
  mitoId: number | null = null;
  diosId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private diosService: DiosService,
    public router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {

    this.mitoForm = this.fb.group({
      Historia: ['', Validators.required]
    });


  }

  ngOnInit(): void {

    // Si lo abrimos como modal capturamos el dato así
    const datos = this.modalService.obtenerDatos();
    if (datos && datos.mitoId) {
      this.mitoId = datos.mitoId;
      this.loadMitoData();
    }
    if (datos && datos.diosId) {
      this.diosId = datos.diosId;
    }
    console.log(datos);

    /*this.mitoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.mitoId) {
      this.loadMitoData();
    }*/
  }

  cerrarModal(): void {
    this.modalService.cerrarModal();
  }

  loadMitoData(): void {
    this.diosService.getMitoById(this.mitoId!).subscribe((mito:any) => {
      this.mitoForm.patchValue(mito);
      console.log(this.mitoForm);
    });
  }

  saveMito(): void {
    if (this.mitoId) {
      // Lógica para actualizar un mito existente
      this.diosService.updateMito({
        id: this.mitoId,
        historia: this.mitoForm.value.Historia,
        diosId: this.diosId,
      }).subscribe(
        () => {
          console.log('Mito actualizado');
          this.modalService.cerrarModal();
        },
        (error) => {
          console.error('Error al actualizar el mito:', error);
        }
      );
    } else {
      // Lógica para agregar un nuevo mito
      this.diosService.addMito({
        historia: this.mitoForm.value.Historia,
        diosId: this.diosId,
      }).subscribe(
        () => {
          console.log('Mito agregado');
          this.modalService.cerrarModal();
        },
        (error) => {
          console.error('Error al agregar el mito:', error);
        }
      );
    }
  }
}