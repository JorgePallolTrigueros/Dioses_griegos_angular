
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { BatallaListService } from '../services/batalla-list.service';



@Component({
  selector: 'app-batalla-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './batalla-list.component.html',
  styleUrl: './batalla-list.component.css'
})
export class BatallaListComponent  implements OnInit {
  batallas: any[] = [];
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private batallaService: BatallaListService) {}
  ngOnInit(): void {
    this.loadBatallas();
  }

  loadBatallas(): void {
    this.batallaService.getBatallas().subscribe(
      (data) => {
        this.batallas = data;
      },
      (error) => {
        console.error('Error al obtener las batallas:', error);
      }
    );
  }

  deleteBatalla(id: number): void {
    this.batallaService.deleteBatalla(id).subscribe(
      () => {
        this.loadBatallas();
      },
      (error) => {
        console.error('Error al eliminar la batalla:', error);
      }
    );
  }

  get paginatedBatallas() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.batallas.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}