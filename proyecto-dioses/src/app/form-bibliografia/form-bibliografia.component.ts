import { Component, OnInit } from '@angular/core';
import { DiosService } from '../services/dios.service';
import { Bibliografia } from '../Modelos/dios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-bibliografia',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de importar CommonModule y FormsModule
  templateUrl: './form-bibliografia.component.html',
  styleUrls: ['./form-bibliografia.component.css']
})
export class FormBibliografiaComponent implements OnInit {
  diosId: number = 0;
  bibliografia: Bibliografia = {
    BibliografiaId: 0,  // Establece un valor predeterminado para el ID
    Referencia: '',
    DiosId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private diosService: DiosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.diosId = +idParam;  // Convierte el valor a número si no es null
      if (this.diosId) {
        this.loadBibliografia(); // Cargar los datos si existe el diosId
      }
    } else {
      console.error('ID no encontrado en la URL');
      // Puedes manejar el caso cuando no se encuentra un ID, por ejemplo, redirigiendo o mostrando un mensaje
    }
  }

  loadBibliografia(): void {
    this.diosService.getBibliografiasByDiosId(this.diosId).subscribe((data) => {
      this.bibliografia = data[0];  // Asumiendo que solo hay una entrada de bibliografía
    });
  }

  saveBibliografia(): void {
    if (this.bibliografia.BibliografiaId === 0) {
      // Crear nueva bibliografía
      this.diosService.addBibliografia(this.bibliografia).subscribe(() => {
        this.router.navigate(['/dios-detail', this.diosId]); // Redirigir a la página del dios
      });
    } else {
      // Actualizar bibliografía existente
      this.diosService.updateBibliografia(this.bibliografia).subscribe(() => {
        this.router.navigate(['/dios-detail', this.diosId]); // Redirigir a la página del dios
      });
    }
  }
}