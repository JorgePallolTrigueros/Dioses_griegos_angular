import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiosService } from '../services/dios.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // Importa NgxPaginationModule
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-lista-dios',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule], // Agrega NgxPaginationModule aquí
  templateUrl: './lista-dios.component.html',
  styleUrls: ['./lista-dios.component.css'],
})
export class ListaDiosComponent implements OnInit {
  dioses: any[] = [];
  filteredDioses: any[] = [];
  currentPage = 1;
  itemsPerPage = 12; // 3 filas de 4 dioses
  categories: string[] = ['Todos', 'Mitología Griega', 'Mitología Romana', 'Mitología Egipcia']; // Ejemplo de categorías
  selectedCategory = 'Todos';

  constructor(private diosService: DiosService, private router: Router, private modalService: ModalService) {}

  ngOnInit(): void {
    this.getDioses();
  }

  getDioses(): void {
    this.diosService.getDioses().subscribe(
      (data) => {
        this.dioses = data;
        this.applyFilter();
      },
      (error) => {
        console.error('Error al obtener la lista de dioses:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.selectedCategory === 'Todos') {
      this.filteredDioses = this.dioses;
    } else {
      this.filteredDioses = this.dioses.filter(dios => dios.Mitologia === this.selectedCategory);
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  viewDiosDetails(diosId: number): void {
    this.router.navigate(['/dios', diosId]);
  }

  editDios(diosId: number): void {
    // Redirigir a la página de edición
    this.router.navigate(['/editar-dios', diosId]);
  }

  deleteDios(diosId: number): void {
    // Lógica para eliminar el dios
    this.diosService.deleteDios(diosId).subscribe(() => {
      this.getDioses();
    });
  }

  anadirDios(): void {
    this.modalService.abrirModal('form-dios', 'Editar Dios');
  }
}