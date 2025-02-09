export interface Dios {
  id: number; // Cambiar de 'Id' a 'id'
  nombre: string;
  origen: string;
  descripcion: string;
  simbolo: string;
  poderes: string;
  genero: string;
  clase: string;
  mitologia: string;
  fotografia: string;
  id_mitologia: number;
}

export interface Mito {
  id: number; // Declarar como 'id'
  historia: string;
  diosId: number;
}

export interface Actualente {
  ActualenteId: number;
  Estado: string;
  Informacion: string;
  DiosId: number;
}

export interface Batalla {
  BatallaId: number;
  Nombre: string;
  seleccionada?: boolean;
}

export interface Bibliografia {
  BibliografiaId?: number;
  Referencia: string;
  DiosId: number;
}



export interface ModoTransporte {
  Modo_TransporteId: number;
  Medio: string;
  DiosId: number;
}
export interface Categoria {
  idCategoria: number;
  Nombre: string;
  definicion: string;
}