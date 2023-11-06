import { Modulo } from './modulo';
export class Video {
  idVideo: number = 0;
  url: string = '';
  titulo: string = '';
  descripcion: string = '';
  duracion: number = 0;
  presentador: string = '';
  transcripcion: string = '';
  modulo: Modulo = new Modulo();
}
