import { Component, OnInit } from '@angular/core';
import { DiosService } from '../services/dios.service';
import { Batalla } from '../Modelos/dios.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-asociar-batalla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './asociar-batalla.component.html',
  styleUrl: './asociar-batalla.component.css'
})
export class AsociarBatallaComponent implements OnInit {

  batallas: Batalla[] = [];

  constructor(private diosService: DiosService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.getBatallas();
  }

  // Método para obtener la lista de batallas
  getBatallas(): void {
    this.diosService.getBatallas().subscribe(
      (batallas) => {
        // Agregamos el campo "seleccionada" como false por defecto
        this.batallas = batallas.map(b => ({ ...b, seleccionada: false }));
      },
      (error) => {
        console.error('Error al obtener las batallas:', error);
      }
    );
  }

  // Método para obtener las batallas seleccionadas
  guardarSeleccion(): void {
    const seleccionadas = this.batallas.filter(batalla => batalla.seleccionada);
    console.log('Batallas seleccionadas:', seleccionadas);
    const batallasIdSeleccionadas = seleccionadas.map(b => b.BatallaId);
    console.log('Ids Seleccionados', batallasIdSeleccionadas);
    // TODO: Hacer una peticion PUT al backend que se encargue de limpiar e insertar la relacion nueva seleccionada
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
