import { Routes } from '@angular/router';
import { DiosComponent } from './dios/dios.component';
import { BatallaComponent } from './batalla/batalla.component';
import { BatallaListComponent} from './batalla-list/batalla-list.component';
import { ListaDiosComponent } from './lista-dios/lista-dios.component';
import { FormDiosComponent } from './form-dios/form-dios.component';
import { FormMitosComponent } from './form-mitos/form-mitos.component';
import { FormBibliografiaComponent  } from './form-bibliografia/form-bibliografia.component';
import { FormModoTransporteComponent} from './form-modotransporte/form-modotransporte.component';
import { FormBatallaComponent } from './form-batalla/form-batalla.component';
import {FormActualmenteComponent} from './form-actualmente/form-actualmente.component';


export const routes: Routes = [
  { path: 'lista-dios', component:  ListaDiosComponent},
  { path: 'dios/:id', component: DiosComponent, },
  { path: 'batalla:id', component: BatallaComponent },
  { path: 'batalla-list', component: BatallaListComponent },  
  { path: 'lista-dios', component: ListaDiosComponent },
  { path: 'form-dios/:id', component: FormDiosComponent },
  { path: 'form-mitos/:id', component: FormMitosComponent },
  { path: 'form-batalla/:id', component: FormBatallaComponent },
  { path: 'form-bibliografia/:id', component: FormBibliografiaComponent },
  { path: 'form-actualmente/:id', component: FormActualmenteComponent },
  { path: 'form-modotransporte/:id', component: FormModoTransporteComponent },

  { path: 'form-dios', component: FormDiosComponent },
  { path: 'form-mitos', component: FormMitosComponent },
  { path: 'form-batalla', component: FormBatallaComponent },
  { path: 'form-bibliografia', component: FormBibliografiaComponent },
  { path: 'form-actualmente', component: FormActualmenteComponent },
{ path: 'form-bibliografia', component: FormBibliografiaComponent },


  // Rutas para cargar contenido dinámico en el modal
  {
    path: 'modal',
    outlet: 'modal',
    children: [
      { path: 'form-mitos/:id', component: FormMitosComponent },
      { path: 'form-bibliografia/:id', component: FormBibliografiaComponent },
      { path: 'form-batalla/:id', component: FormBatallaComponent },
      { path: 'form-actualmente/:id', component: FormActualmenteComponent },
      { path: 'form-modotransporte/:id', component: FormModoTransporteComponent },
      { path: 'form-mitos', component: FormMitosComponent },
      { path: 'form-bibliografia', component: FormBibliografiaComponent },
      { path: 'form-batalla', component: FormBatallaComponent },
      { path: 'form-actualmente', component: FormActualmenteComponent },
      { path: 'form-modotransporte', component: FormModoTransporteComponent },
    ]
  }
];