import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiosService } from '../services/dios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-form-actualmente',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule], // Asegúrate de incluir ambos módulos
  templateUrl: './form-actualmente.component.html',
  styleUrls: ['./form-actualmente.component.css'],
})
export class FormActualmenteComponent implements OnInit {
  actualenteForm!: FormGroup; // Formulario reactivo
  actualenteId: number | null = null; // ID del Actualente
  diosId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private diosService: DiosService,
    public router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    // Inicializamos el formulario con validaciones
    this.actualenteForm = this.fb.group({
      Estado: ['', [Validators.required, Validators.minLength(3)]], // Mínimo 3 caracteres
      Informacion: ['', [Validators.required, Validators.maxLength(500)]], // Máximo 500 caracteres
      DiosId: [null, Validators.required], // Requerido
    });
  }

  ngOnInit(): void {


    // Si lo abrimos como modal capturamos el dato así
    const datos = this.modalService.obtenerDatos();
    if (datos && datos.actualenteId) {
      this.actualenteId = datos.actualenteId;
      this.loadActualenteData();
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

  // Cargar datos del Actualente
  loadActualenteData(): void {
    if (this.actualenteId) {
      this.diosService.getActualenteById(this.actualenteId).subscribe(
        (data) => {

          console.log('data', data);

          // Reemplazar valores nulos con valores predeterminados
          this.actualenteForm.patchValue({
            Estado: data.Estado ?? 'Estado no especificado',
            Informacion: data.Informacion ?? 'Información no disponible',
            DiosId: data.DiosId,
          });
        },
        (error) => {
          console.error('Error al cargar Actualente:', error);
          alert('No se pudo cargar el Actualente.');
        }
      );
    }
  }

  // Enviar formulario
  submitForm(): void {
    if (this.actualenteForm.valid) {
      const formData = this.actualenteForm.value;

      if (this.actualenteId) {
        // Actualizar Actualente existente
        this.diosService.updateActualente({ ...formData, ActualenteId: this.actualenteId }).subscribe(
          () => {
            alert('Actualente actualizado con éxito');
            this.router.navigate(['/dios', formData.DiosId]);
          },
          (error) => {
            console.error('Error al actualizar Actualente:', error);
            alert('Error al actualizar el Actualente.');
          }
        );
      } else {
        // Crear un nuevo Actualente
        this.diosService.addActualente(formData).subscribe(
          () => {
            alert('Actualente creado con éxito');
            this.router.navigate(['/dios', formData.DiosId]);
          },
          (error) => {
            console.error('Error al crear Actualente:', error);
            alert('Error al crear el Actualente.');
          }
        );
      }
    } else {
      alert('El formulario no es válido. Por favor, revisa los campos.');
    }
  }
}