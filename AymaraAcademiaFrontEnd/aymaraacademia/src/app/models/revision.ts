import { Estudiante } from './estudiante'
import { Proyecto } from './proyecto';
export class Revision {
idRevision:number=0;
proyecto:Proyecto=new Proyecto();
estudiante:Estudiante=new Estudiante();
calificacion:number=0;
}
