
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiosService } from '../services/dios.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-form-dios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // IMPORTA ESTOS MÓDULOS AQUÍ
  templateUrl: './form-dios.component.html',
  styleUrl: './form-dios.component.css'
})
export class FormDiosComponent implements OnInit {
  diosForm!: FormGroup; // Asegúrate de que esté inicializado
  diosId: number | null = null;


  constructor(
    private fb: FormBuilder,
    private diosService: DiosService,
    public router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.diosForm = this.fb.group({
      Name: ['', [Validators.required, Validators.maxLength(255)]],
      Origen: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Simbolo: ['', Validators.required],
      Poderes: ['', Validators.required],
      Genero: ['', Validators.required],
      Clase: ['', Validators.required],
      Mitologia: ['', Validators.required],
      Fotografia: ['', Validators.required],
      Id_mitologia: [null],
    });
  }

  ngOnInit(): void {
    // Si lo abrimos como modal capturamos el dato así
    const datos = this.modalService.obtenerDatos();
    if (datos && datos.diosId) {
      this.diosId = datos.diosId;
      this.loadDiosData();
    }

    // Esto es si queremos que el componente sea abierto como pagina directamente
    /**this.diosId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.diosId) {
      this.loadDiosData();
    }*/
  }

  loadDiosData(): void {
    this.diosService.getDiosById(this.diosId!).subscribe((dios) => {
      this.diosForm.patchValue(dios);
    });
  }

  cerrarModal(): void {
    this.modalService.cerrarModal();
  }

  submitForm(): void {
    if (this.diosForm.valid) {
      if (this.diosId) {
        // Aquí solo pasas el ID y los datos del formulario
        this.diosService.updateDios(this.diosId, this.diosForm.value).subscribe(
          () => {
            alert('Dios actualizado correctamente');
            this.cerrarModal();
            //this.router.navigate(['/lista-dios']);
          },
          (error) => console.error('Error al actualizar el dios:', error)
        );
      } else {
        // Aquí solo pasas los datos del formulario
        this.diosService.createDios(this.diosForm.value).subscribe(
          () => {
            alert('Dios creado correctamente');
            this.cerrarModal();
            //this.router.navigate(['/lista-dios']);
          },
          (error) => console.error('Error al crear el dios:', error)
        );
      }
    }
  }



}