import { Component, OnInit } from '@angular/core';
import { DiosService } from '../services/dios.service';
import { ModoTransporte } from '../Modelos/dios.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-modotransporte',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar CommonModule y FormsModule
  templateUrl: './form-modotransporte.component.html',
  styleUrls: ['./form-modotransporte.component.css']
})
export class FormModoTransporteComponent implements OnInit {
  diosId: number = 0; // Inicializar con valor por defecto
  modoTransporte: ModoTransporte = {
    Modo_TransporteId: 0,
    Medio: '',
    DiosId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private diosService: DiosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.diosId = +idParam;
      this.modoTransporte.DiosId = this.diosId; // Asignar el DiosId al modo de transporte
    }
  }

  saveModoTransporte(): void {
    if (this.modoTransporte.Modo_TransporteId === 0) {
      // Crear nuevo modo de transporte
      this.diosService.addModoTransporte(this.modoTransporte).subscribe(() => {
        this.router.navigate(['/dios-detail', this.diosId]);
      });
    } else {
      // Actualizar modo de transporte existente
      this.diosService.updateModoTransporte(this.modoTransporte).subscribe(() => {
        this.router.navigate(['/dios-detail', this.diosId]);
      });
    }
  }
}
