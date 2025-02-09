import { Component, OnInit } from '@angular/core';
import { DiosService } from '../services/dios.service';
import { Batalla } from '../Modelos/dios.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { ModalService } from '../services/modal.service';


@Component({

  selector: 'app-form-batalla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-batalla.component.html',
  styleUrl: './form-batalla.component.css'
})
export class FormBatallaComponent implements OnInit {
  batallas: Batalla[] = [];
  nuevaBatalla: Batalla = { BatallaId: 0, Nombre: '' };

  constructor(private diosService: DiosService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.getBatallas(); // Cargar batallas al inicio
  }

  // Método para obtener la lista de batallas
  getBatallas(): void {
    this.diosService.getBatallas().subscribe(
      (batallas) => {
        this.batallas = batallas;
      },
      (error) => {
        console.error('Error al obtener las batallas:', error);
      }
    );
  }

  // Método para agregar una nueva batalla
  agregarBatalla(): void {
    this.diosService.addBatalla(this.nuevaBatalla).subscribe(
      (batalla) => {
        this.batallas.push(batalla); // Añadir la nueva batalla a la lista
        this.nuevaBatalla = { BatallaId: 0, Nombre: '' }; // Resetear el formulario
        this.cerrarModal();
      },
      (error) => {
        console.error('Error al agregar batalla:', error);
      }
    );
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }
}