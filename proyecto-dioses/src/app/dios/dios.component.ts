
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiosService } from '../services/dios.service';
import { Dios, Actualente, Batalla, Bibliografia, Mito, ModoTransporte } from '../Modelos/dios.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Importar Router para navegar
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-dios',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './dios.component.html',
  styleUrl: './dios.component.css'
})

export class DiosComponent implements OnInit {
  diosId: any;
  dios: any = {};
  mitos: any[] = [];
  modosTransporte: any[] = [];
  actualentes: any[] = [];
  batallas: any[] = [];
  bibliografias: any[] = [];


  constructor(
    private route: ActivatedRoute, 
    private diosService: DiosService, 
    private router: Router,
    private modalService: ModalService
  ) {}


  ngOnInit(): void {
    this.diosId = this.route.snapshot.paramMap.get('id');
    this.loadDios();
    this.loadMitos();
    this.loadModoTransportes();
    this.loadActualmente();
    this.loadBibliografias();
    this.loadBatallas();
  }

  loadDios(): void {
    this.diosService.getDiosById(this.diosId).subscribe(
      (data) => {
        this.dios = data;
      },
      (error) => {
        console.error('Error al obtener los datos del dios:', error);
      }
    );
  }

  loadMitos(): void {
    this.diosService.getMitosByDiosId(this.diosId).subscribe(
      (data) => {
        this.mitos = data;
      },
      (error) => {
        console.error('Error al cargar los mitos:', error);
      }
    );
  }

  loadModoTransportes(): void {
    this.diosService.getModoTransporteByDiosId(this.diosId).subscribe(
      (data) => {
        this.modosTransporte = data;
      },
      (error) => {
        console.error('Error al cargar los modos de transporte:', error);
      }
    );
  }

  loadActualmente(): void {
    this.diosService.getActualentesByDiosId(this.diosId).subscribe(
      (data) => {
        this.actualentes = data;
      },
      (error) => {
        console.error('Error al cargar los mitos:', error);
      }
    );
  }

  loadBibliografias(): void {
    this.diosService.getBibliografiasByDiosId(this.diosId).subscribe(
      (data) => {
        this.bibliografias = data;
      },
      (error) => {
        console.error('Error al cargar los mitos:', error);
      }
    );
  }

  loadBatallas(): void {
    this.diosService.getBatallasByDiosId(this.diosId).subscribe(
      (data) => {
        this.batallas = data;
      },
      (error) => {
        console.error('Error al cargar los mitos:', error);
      }
    );
  }
  addMito(): void {
    // Abrir el formulario en un modal
    this.modalService.abrirModal('form-mitos', 'Añadir Mito', { diosId: this.diosId });
    // Navegacion al formulario antigua
    //this.router.navigate(['/form-mitos']);
  }
  
  addBibliografia(): void {
    this.router.navigate(['/form-bibliografia']);
  }
  
  editBibliografia(bibliografia: any): void {
    if (bibliografia?.id) {
      this.router.navigate(['/form-bibliografia', bibliografia.id]);
    } else {
      console.error('Bibliografía inválida:', bibliografia);
    }
  }
  
  addActualmente(): void {
    this.modalService.abrirModal('form-actualmente', 'Añadir Nota de Actualidad', { diosId: this.diosId });
  }
  

  editActualmente(actualmente: any): void {
    if (actualmente?.ActualenteId) {
      // Reemplazar valores nulos con valores predeterminados
      actualmente.Estado = actualmente.Estado ?? 'Estado no especificado';
      actualmente.Informacion = actualmente.Informacion ?? 'Información no disponible';
  
      // Navegar al formulario de edición con los datos corregidos
      //this.router.navigate(['/form-actualmente', actualmente.ActualenteId]);

      this.modalService.abrirModal('form-actualmente', 'Editar Nota de actualidad', { 
        actualenteId: actualmente.ActualenteId,
        diosId: this.diosId 
      });


    } else {
      console.error('Actualente inválido:', actualmente);
      alert('Este Actualente no tiene suficiente información para editar.');
    }
  }

  addModoTransporte(): void {
    this.router.navigate(['/form-modotransporte']);
  }

  deleteMito(id: number): void {
    // Lógica para eliminar un mito
    console.log(`Eliminar mito con ID: ${id}`);
  }
  
  viewMito(mito: Mito): void {
    this.router.navigate(['/detalle-mitos', mito.id]);
  }
  
  deleteBatalla(id: number): void {
    console.log(`Eliminar batalla con ID: ${id}`);
  }
  
  viewBatalla(batalla: Batalla): void {
    this.router.navigate(['/detalle-batalla', batalla.BatallaId]);
  }
  
  deleteBibliografia(id: number): void {
    console.log(`Eliminar bibliografía con ID: ${id}`);
  }
  
  deleteActualmente(id: number): void {
    console.log(`Eliminar Actualmente con ID: ${id}`);
  }

  viewActualmente(bibliografia: Actualente): void {
    this.router.navigate(['/detalle-actualmente', bibliografia.ActualenteId]);
  }

  viewBibliografia(bibliografia: Bibliografia): void {
    this.router.navigate(['/detalle-bibliografia', bibliografia.BibliografiaId]);
  }
  
  deleteModoTransporte(id: number): void {
    console.log(`Eliminar modo de transporte con ID: ${id}`);
  }
  
  editModoTransporte(transporte: any): void {
    if (transporte?.id) {
      this.router.navigate(['/form-modotransporte', transporte.id]);
    } else {
      console.error('Modo de transporte inválido:', transporte);
    }
  }

  editDios(): void {
    // Abrir la pagina en un modal
    this.modalService.abrirModal('form-dios', 'Editar Dios', { diosId: this.diosId });
    // Ir a la pagina
    //this.router.navigate(['/form-dios', this.diosId]);
  }
  
  editMito(mito: any): void {
    // Abrir la pagina de edicion de mito en un modal 
    this.modalService.abrirModal('form-mitos', 'Editar Mito', { 
      mitoId: mito.Id,
      diosId: this.diosId 
    });
    // Antiguo: Se navega a la pagina de form-mitos
    /*if (mito?.Id) {
      this.router.navigate(['/form-mitos', mito.Id]);
    } else {
      console.error('Mito inválido:', mito);
    }*/
  }
  
  addBatalla(): void {
    this.router.navigate(['/form-batalla']);
  }
  
  editBatalla(batalla: any): void {
    if (batalla?.id) {
      this.router.navigate(['/form-batalla', batalla.id]);
    } else {
      console.error('Batalla inválida:', batalla);
    }
  }

  viewModoTransporte(transporte: ModoTransporte): void {
    this.router.navigate(['/detalle-modotransporte', transporte.Modo_TransporteId]);
  }
}