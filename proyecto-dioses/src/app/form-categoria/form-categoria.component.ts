import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiosService } from '../services/dios.service';
import { Categoria } from '../Modelos/dios.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
  categoria: Categoria = {
    idCategoria: 0,
    Nombre: '',
    definicion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private diosService: DiosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const categoriaId = +idParam;
      this.loadCategoria(categoriaId);
    }
  }

  loadCategoria(idCategoria: number): void {
    this.diosService.getCategoriaById(idCategoria).subscribe((data) => {
      this.categoria = data;
    });
  }

  saveCategoria(): void {
    if (this.categoria.idCategoria === 0) {
      // Crear nueva categoría
      this.diosService.addCategoria(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    } else {
      // Actualizar categoría existente
      this.diosService.updateCategoria(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    }
  }
}